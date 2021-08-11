import React, { useEffect, useState } from 'react';
import { createMarkup } from './creatMarkup';
import { Claim, RepositoryLocalPure, RsData, Score } from "@reasonscore/core";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './SearchElement.scss';
//@ts-ignore
import Fuse from 'fuse.js'
//@ts-ignore
import { encode } from "../node_modules/flexsearch/dist/module/lang/latin/extra.js";
import { selectElement } from './selectElement';
import { resourceUsage } from 'process';

type MyProps = {
    repository: RepositoryLocalPure,
    mainScoreId: string,
};

const SearchIndex = new Fuse([], {
    // isCaseSensitive: false,
    includeScore: true,
    shouldSort: true,
    includeMatches: true,
    findAllMatches: false,
    minMatchCharLength: 3,
    // location: 0,
    // threshold: .2,
    // distance: 100,
    // useExtendedSearch: false,
    ignoreLocation: true,
    // ignoreFieldNorm: false,
    keys: [
        "content",
    ]
});

let indexPopulated = false;

const SearchElement = ({ repository, mainScoreId }: MyProps) => {
    const [searchText, setSearchText] = useState("");
    const [foundClaims, setFoundClaims] = useState<{ claim: Claim, score: Score, searchResult: any }[]>([]);

    const handleText = async (e: React.FormEvent<HTMLInputElement>) => {
        const searchText = e.currentTarget.value;
        setSearchText(searchText);

        // If the search index hasn't been populated then populate it now. lazy loading after they indicated they want to search.
        if (!indexPopulated) {
            indexPopulated = true;
            for (const score of (await repository.getDescendantScoresById(mainScoreId))) {
                const claim = await repository.getClaim(score.sourceClaimId);
                if (claim) {
                    // @ts-ignore
                    SearchIndex.add({ id: claim.id, content: claim.content })
                }
            }
        }


        // Perform that search
        if (searchText.length > 2) {
            const items: { claim: Claim, score: Score, searchResult: any }[] = [];
            const searchResults: any[] = SearchIndex.search({ content: searchText });
            console.log(searchResults);
            for (const searchResult of searchResults) {
                const claim = await repository.getClaim(searchResult.item.id);
                const score = (await repository.getScoresBySourceId(searchResult.item.id))[0];
                if (claim && score && searchResult.score < .85) {
                    items.push({ claim: claim, score: score, searchResult: searchResult });
                }
            }
            console.log(items);
            setFoundClaims(items);
        } else if (foundClaims.length) {
            setFoundClaims([]);
        }
    }

    const handleOpenButtonClick = (scoreid: string) => {
        selectElement(scoreid, repository.rsData, {})
        document.getElementById("children-" + scoreid)?.scrollIntoView()
    }



    const getScoreUrl = (score: Score) => {
        if (score) {
            // TODO: Similar to code on SearchElement
            let scoreUrl = new URL(window.location.toString());
            scoreUrl.searchParams.set("s", score.id);
            return scoreUrl.toString();
        }
    }

    return (
        <div className="search">
            <form >
                <div className="form-row ">
                    <div className="form-group">
                        <label htmlFor="searchBox">Search this analysis</label>
                        <input type="text" className="form-control" id="searchBox" value={searchText} onChange={handleText}></input>
                    </div>
                </div>
            </form>
            <div className={"search-results-hider" + (!foundClaims.length ? "" : " hidden")}>
                <div className="searchResults">
                    <TransitionGroup component={null}>
                        {foundClaims &&
                            foundClaims.map(({ claim, score, searchResult }, index) => (
                                <CSSTransition
                                    key={claim.id}
                                    timeout={500}
                                    classNames='searchitem'>
                                    <div className="search-result" onClick={() => handleOpenButtonClick(score.id)}>
                                        {index ? <hr></hr> : ""}
                                        <span className={'rs-content'} dangerouslySetInnerHTML={createMarkup(claim, score)}></span>
                                        {/* <br></br><a href={getScoreUrl(score)} target="_blank">Open this claim in a new window</a> */}
                                        &nbsp;<a className="searchMoreInfo" onClick={() => handleOpenButtonClick(score.id)} target="_blank">More Info&hellip;</a>
                                        &nbsp;&nbsp;<small style={{ opacity: .2 }}>{100-Math.round(searchResult.score * 100)}%</small>
                                    </div>
                                </CSSTransition>
                            ))}
                    </TransitionGroup>
                </div>
            </div>
        </div>
    );
}

export default SearchElement;
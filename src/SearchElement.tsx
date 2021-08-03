import React, { useEffect, useState } from 'react';
import { createMarkup } from './creatMarkup';
import { Claim, RepositoryLocalPure, RsData, Score } from "@reasonscore/core";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './SearchElement.scss';
//@ts-ignore
import { Index } from 'flexsearch';
//@ts-ignore
import { encode } from "../node_modules/flexsearch/dist/module/lang/latin/extra.js";
import { selectElement } from './selectElement';

type MyProps = {
    repository: RepositoryLocalPure,
    mainScoreId: string;
};

const index = new Index({
    encode: encode,
    tokenize: "full",
    minlength: 3,
});

let indexPopulated = false;

const SearchElement = ({ repository, mainScoreId }: MyProps) => {
    const [searchText, setSearchText] = useState("");
    const [foundClaims, setResults] = useState<{ claim: Claim, score: Score }[]>([]);

    const handleText = async (e: React.FormEvent<HTMLInputElement>) => {
        const searchText = e.currentTarget.value;
        setSearchText(searchText);

        // If the search index hasn't been populated then populate it now. lazy loading after they indicated they want to search.
        if (!indexPopulated) {
            indexPopulated = true;
            for (const score of (await repository.getDescendantScoresById(mainScoreId))) {
                const claim = await repository.getClaim(score.sourceClaimId);
                if (claim) {
                    index.add(claim.id, claim.content);
                }
            }
        }

        
        // Perform that search
        if (searchText.length > 2) {
            const items: { claim: Claim, score: Score }[] = [];
            for (const claimId of index.search(searchText)) {
                const claim = await repository.getClaim(claimId);
                const score = (await repository.getScoresBySourceId(claimId))[0];
                if (claim && score) items.push({ claim: claim, score: score });
            }
            setResults(items);
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
                        <label htmlFor="searchBox">Search</label>
                        <input type="text" className="form-control" id="searchBox" value={searchText} onChange={handleText}></input>
                    </div>
                    <TransitionGroup component={null}>
                        {
                            foundClaims.length === 0 ?
                                ""
                                : foundClaims.map(({ claim, score }) => (
                                    <CSSTransition
                                        key={claim.id}
                                        timeout={500}
                                        classNames='searchitem'>
                                        <div>
                                            <span className={'rs-content'} dangerouslySetInnerHTML={createMarkup(claim, score)}></span>
                                            <br></br><a href={getScoreUrl(score)} target="_blank">Open this claim in a new window</a>
                                            <br></br><a onClick={() =>handleOpenButtonClick(score.id)} target="_blank">Open this claim below the search results</a>
                                            <hr></hr>
                                        </div>
                                    </CSSTransition>
                                ))}
                    </TransitionGroup>
                </div>
            </form>
        </div>
    );
}

export default SearchElement;
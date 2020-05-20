import React from 'react';
import { RepositoryLocalPure, calculateScoreActions, Action, Messenger } from "@reasonscore/core";
import { ClaimEdge } from './dataModels/ClaimEdge';
import { Claim } from './dataModels/Claim';

type MyProps = {
    claimId: string,
    repository: RepositoryLocalPure,
    proMainContext: boolean,
    handleEditClose: () => void,
    messenger: Messenger,
    scoreId: string,
    new?: boolean,
    claimEdge?: ClaimEdge
};

type MyState = {
    pasteClaim: string,
    proMain: boolean,
    claim?: Claim,
    claimEdge?: ClaimEdge,
};

class EditorElement extends React.Component<MyProps, MyState> {

    constructor(props: MyProps) {
        super(props);
        this.state = {
            proMain: true,
            pasteClaim: "",
        };
    }

    async componentDidMount() {
        const newState = {} as MyState;
        if (this.props.new) {
            newState.claim = new Claim();
            newState.claimEdge = new ClaimEdge(this.props.claimId, newState.claim.id);
        } else {
            const claim = await this.props.repository.getClaim(this.props.claimId) as Claim;
            if (claim) {
                newState.claim = claim;
            }
            if (this.props.claimEdge) {
                newState.claimEdge = JSON.parse(JSON.stringify(this.props.claimEdge)) //TODO: Replace with deep clone function
            }
        }

        if (newState.claimEdge) {
            newState.proMain = this.props.proMainContext ? newState.claimEdge.pro : !newState.claimEdge.pro;
        }

        //TODO: Temp for items with blank properties. This correctes error: A component is changing an uncontrolled input of type text to be controlled
        if (newState.claim) {
            if (newState.claim.labelMin === undefined) { newState.claim.labelMin = "" }
            if (newState.claim.labelMid === undefined) { newState.claim.labelMid = "" }
            if (newState.claim.labelMax === undefined) { newState.claim.labelMax = "" }
            if (newState.claimEdge) {
                if (newState.claimEdge.priority === undefined) { newState.claim.priority = "" }
            }
        }

        this.setState(newState);
    }

    handleSubmit = () => {
        const actions: Action[] = [];
        if (this.state.pasteClaim && this.state.claimEdge) {
            if (this.state.claimEdge) {
                const claimEdge = this.state.claimEdge;
                claimEdge.childId = this.state.pasteClaim;
                actions.push(
                    new Action(
                        this.state.claimEdge, undefined, "add_claimEdge"
                    )
                )
            }
        } else {
            actions.push(
                new Action(
                    this.state.claim,
                    undefined, this.props.new ? "add_claim" : "modify_claim"
                )
            )
            if (this.state.claimEdge) {
                actions.push(new Action(
                    this.state.claimEdge, undefined,
                    this.props.new ? "add_claimEdge" : "modify_claimEdge"
                ))
            }
        }

        calculateScoreActions({
            actions: actions,
            repository: this.props.repository
        }).then(async (scoreActions) => {
            await this.props.messenger.notify(actions.concat(scoreActions));
            this.props.handleEditClose();
        });
    }

    handleText = (e: React.FormEvent<HTMLInputElement> |
        React.FormEvent<HTMLTextAreaElement> |
        React.FormEvent<HTMLSelectElement>) => {
        const pathParts = e.currentTarget.id.split(".");
        const state = this.state as any;
        if (pathParts.length === 2) {
            this.setState({
                [pathParts[0]]: {
                    ...state[pathParts[0]],
                    [pathParts[1]]: e.currentTarget.value
                }
            } as any);
        } else if (pathParts.length === 1) {
            this.setState({
                [pathParts[0]]: e.currentTarget.value
            } as any);
        } else {
            throw new Error("id expectes 1 or 2 items in path. " + pathParts.length + " were received.");
        }

    }

    handlePriority = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ claimEdge: { priority: e.currentTarget.value } as any });
    }

    handlePasteClaim = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ pasteClaim: e.currentTarget.value });
    }

    handlePro = (e: React.FormEvent<HTMLInputElement>) => {
        let proMain = this.props.proMainContext ? e.currentTarget.checked : !e.currentTarget.checked;
        this.setState({
            claimEdge: {
                ...this.state.claimEdge,
                pro: e.currentTarget.checked,
            } as any,
            proMain: proMain
        });
    }

    handleProMain = (e: React.FormEvent<HTMLInputElement>) => {
        let pro = this.props.proMainContext ? e.currentTarget.checked : !e.currentTarget.checked;
        this.setState({
            claimEdge: {
                ...this.state.claimEdge,
                pro: pro,
            } as any,
            proMain: e.currentTarget.checked
        });
    }

    handleDelete = async () => {
        if (this.state.claimEdge) {
            const actions: Action[] = [];
            actions.push(
                new Action(
                    undefined,
                    this.state.claimEdge, "delete_claimEdge", this.state.claimEdge.id
                )
            )

            calculateScoreActions({
                actions: actions,
                repository: this.props.repository
            }).then(async (scoreActions) => {
                await this.props.messenger.notify(actions.concat(scoreActions));
                this.props.handleEditClose();
            });

        }
    }

    handleCancel = () => {
        this.props.handleEditClose();
    }

    render() {
        return (
            <>
                {
                    this.state.claim &&
                    <form className="container">
                        <div className="form-group">
                            <label htmlFor="claim.content">Content</label>
                            <textarea className="form-control" id="claim.content" value={this.state.claim.content} onChange={this.handleText} rows={2}></textarea>
                            <small className="form-text text-muted">
                                For hyperlinks us <a href="https://spec.commonmark.org/0.29/#links">commonMark</a> syntax:
                                This is [an example](http://example.com/) inline link.</small>
                        </div>
                        <div className="form-row  edit-lines">
                            <div className="form-group col-4">
                                <label htmlFor="claim.labelMin">Minimum Value Label</label>
                                <input type="text" className="form-control" id="claim.labelMin" value={this.state.claim.labelMin} onChange={this.handleText}></input>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="claim.labelMid">Middle Value Label</label>
                                <input type="text" className="form-control" id="claim.labelMid" value={this.state.claim.labelMid} onChange={this.handleText}></input>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="claim.labelMax">Maximum Value Label</label>
                                <input type="text" className="form-control" id="claim.labelMax" value={this.state.claim.labelMax} onChange={this.handleText}></input>
                            </div>
                        </div>

                        {this.state.claimEdge &&
                            < >
                                <div className="form-row">
                                    <div className="form-group col-xs-4 mr-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="claimEdge.pro" checked={this.state.claimEdge.pro} onChange={this.handlePro} />
                                            <label className="form-check-label" htmlFor="claimEdge.pro">Pro Parent</label>
                                        </div>
                                    </div>
                                    <div className="form-group col-xs-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="proMain" checked={this.state.proMain} onChange={this.handleProMain} />
                                            <label className="form-check-label" htmlFor="proMain">Pro Main</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-xs-4">
                                        <label htmlFor="claimEdge.affects">Affects</label>
                                        <select className="form-control" id="claimEdge.affects" value={this.state.claimEdge.affects} onChange={this.handleText}>
                                            <option value={"confidence"}>Confidence</option>
                                            <option value={"relevance"}>Relevance</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-xs-4">
                                        <label htmlFor="claimEdge.priority">Priority</label>
                                        <input type="text" className="form-control" id="claimEdge.priority" value={this.state.claimEdge.priority} onChange={this.handlePriority}></input>
                                    </div>
                                    <div className="form-group col-xs-4">
                                        <label htmlFor="pasteClaim">Paste Claim</label>
                                        <input type="text" className="form-control" id="pasteClaim" value={this.state.pasteClaim} onChange={this.handlePasteClaim}></input>
                                    </div>
                                </div>
                            </>
                        }
                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group mr-3" role="group" aria-label="Save Locally">
                                <button type="button" value="Save Locally" className="btn btn-primary" onClick={this.handleSubmit}>Save Locally</button>
                            </div>
                            <div className="btn-group mr-3" role="group" aria-label="Cancel">
                                <button type="button" value="Cancel" className="btn btn-secondary" onClick={this.handleCancel}>Cancel</button>
                            </div>
                            {this.props.claimEdge &&
                                <div className="btn-group ml-5" role="group" aria-label="Delete">
                                    <button type="button" value="Delete" className="btn btn btn-outline-danger" onClick={this.handleDelete}>Delete</button>
                                </div>
                            }
                        </div>
                        
                        <br></br>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label htmlFor="claim.claimId">Claim ID</label>
                                <input disabled type="text" className="form-control" id="claim.claimId" value={this.state.claim.id} onChange={this.handleText}></input>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="claim.scoreId">Score ID</label>
                                <input disabled type="text" className="form-control" id="claim.scoreId" value={this.props.scoreId} onChange={this.handleText}></input>
                            </div>
                        </div>
                    </form>
                }</>
        );
    }
}

export default EditorElement;
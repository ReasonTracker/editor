import React from 'react';
import { RepositoryLocalPure, calculateScoreActions, Claim, ClaimEdge, Action, Messenger, iClaimEdge, Affects } from "@reasonscore/core";

type MyProps = {
    claimId: string,
    repository: RepositoryLocalPure,
    proMainContext: boolean,
    handleEditClose: () => void,
    messenger: Messenger,
    new?: boolean,
    claimEdge?: iClaimEdge
};

type MyState = {
    content: string,
    pro?: boolean,
    proMain?: boolean,
    affects?: Affects,
    priority: string,
    pasteClaim: string,
    originalClaimEdge?: iClaimEdge
};

class EditorElement extends React.Component<MyProps, MyState> {

    claim = new Claim();
    claimEdge: ClaimEdge | undefined;

    constructor(props: MyProps) {
        super(props);
        this.state = {
            content: "",
            pro: true,
            proMain: this.props.proMainContext,
            affects: undefined,
            priority: "",
            pasteClaim: "",
            originalClaimEdge: undefined,
        };
    }

    async componentDidMount() {
        let originalClaimEdge: iClaimEdge | undefined;
        if (this.props.new) {
            this.claim = new Claim();
            originalClaimEdge = new ClaimEdge(this.props.claimId, this.claim.id);
        } else {
            const claim = await this.props.repository.getClaim(this.props.claimId);
            originalClaimEdge = this.props.claimEdge;
            if (claim) {
                this.claim = claim as Claim;
            }
        }
        const pro = originalClaimEdge ? originalClaimEdge.pro : true;
        let newState: MyState = {
            content: this.claim.content,
            pro: pro,
            proMain: this.props.proMainContext ? pro : !pro,
            affects: originalClaimEdge ? originalClaimEdge.affects : undefined,
            priority: originalClaimEdge ? originalClaimEdge.priority : "",
            pasteClaim: "",
            originalClaimEdge: originalClaimEdge,
        }

        if (newState.priority === undefined) { newState.priority = "" } //ToDo: Temp for items with blank priority. mutates state?

        this.setState(newState);


    }

    handleSubmit = () => {
        const actions: Action[] = [];
        if (this.state.pasteClaim && this.state.originalClaimEdge) {
            actions.push(
                new Action(
                    new ClaimEdge(this.state.originalClaimEdge.parentId, this.state.pasteClaim, this.state.affects, this.state.pro, this.state.originalClaimEdge.id, this.state.priority),
                    undefined, "add_claimEdge", this.state.originalClaimEdge.id
                )
            )
        } else {
            actions.push(
                new Action(
                    new Claim(this.state.content, this.claim.id),
                    undefined, this.props.new ? "add_claim" : "modify_claim", this.claim.id
                )
            )
            if (this.state.originalClaimEdge) {
                actions.push(new Action(
                    new ClaimEdge(this.state.originalClaimEdge.parentId, this.state.originalClaimEdge.childId, this.state.affects, this.state.pro, this.state.originalClaimEdge.id, this.state.priority),
                    undefined, this.props.new ? "add_claimEdge" : "modify_claimEdge" , this.state.originalClaimEdge.id
                ))
            }
        }

        calculateScoreActions({
            actions: actions,
            repository: this.props.repository
        }).then(async (scoreActions) => {
            //TODO: How do I set the glocal state the the new RSData?
            await this.props.messenger.notify(actions.concat(scoreActions));
            this.props.handleEditClose();
        });
    }

    handleContent = (e: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({ content: e.currentTarget.value });
    }

    handlePriority = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ priority: e.currentTarget.value });
    }

    handlePasteClaim = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ pasteClaim: e.currentTarget.value });
    }

    handlePro = (e: React.FormEvent<HTMLInputElement>) => {
        let proMain = this.props.proMainContext ? e.currentTarget.checked : !e.currentTarget.checked;
        this.setState({
            pro: e.currentTarget.checked,
            proMain: proMain
        });
    }

    handleProMain = (e: React.FormEvent<HTMLInputElement>) => {
        let pro = this.props.proMainContext ? e.currentTarget.checked : !e.currentTarget.checked;
        this.setState({
            pro: pro,
            proMain: e.currentTarget.checked
        });
    }

    handleAffects = (e: React.FormEvent<HTMLSelectElement>) => {
        this.setState({ affects: e.currentTarget.value as Affects });
    }

    handleDelete = async () => {
        //TODO : move to repository
        if (this.state.originalClaimEdge) {
            const actions: Action[] = [];
                actions.push(
                    new Action(
                        undefined,
                        this.state.originalClaimEdge, "delete_claimEdge", this.state.originalClaimEdge.id
                    )
                )
    
            calculateScoreActions({
                actions: actions,
                repository: this.props.repository
            }).then(async (scoreActions) => {
                //TODO: How do I set the glocal state the the new RSData?
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
            <form className="container">
                <div className="form-group">
                    <label htmlFor="claim.content">Content</label>
                    <textarea className="form-control" id="claim.content" value={this.state.content} onChange={this.handleContent} rows={2}></textarea>
                    <small className="form-text text-muted">For hyperlinks us <a href="https://spec.commonmark.org/0.29/#links">commonMark</a> syntax:
                    This is [an example](http://example.com/) inline link.</small>
                </div>
                {this.state.originalClaimEdge &&
                    < >
                        <div className="form-row">
                            <div className="form-group col-xs-4 mr-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="claimEdge.pro" checked={this.state.pro} onChange={this.handlePro} />
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
                                <select className="form-control" id="claimEdge.affects" value={this.state.affects} onChange={this.handleAffects}>
                                    <option value={"confidence"}>Confidence</option>
                                    <option value={"relevance"}>Relevance</option>
                                </select>
                            </div>
                            <div className="form-group col-xs-4">
                                <label htmlFor="claimEdge.priority">Priority</label>
                                <input type="text" className="form-control" id="claimEdge.priority" value={this.state.priority} onChange={this.handlePriority}></input>
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
                    {this.state.originalClaimEdge &&
                        <div className="btn-group ml-5" role="group" aria-label="Delete">
                            <button type="button" value="Delete" className="btn btn btn-outline-danger" onClick={this.handleDelete}>Delete</button>
                        </div>
                    }
                </div>
                <span>ID: {this.claim.id}</span>
            </form>
        );
    }
}

export default EditorElement;
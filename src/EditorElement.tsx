import React from 'react';
import { RepositoryLocalPure, calculateScoreActions, Claim, ClaimEdge, Action, Messenger} from "@reasonscore/core";

type MyProps = {
    claimId: string,
    repository: RepositoryLocalPure,
    proMainContext: boolean,
    claimEdge?: ClaimEdge,
    handleEditClose: () => void,
    messenger: Messenger,
    new?: boolean,
};

type MyState = {
    content: string,
    pro?: boolean,
    proMain?: boolean,
    affects?: string,
    priority: string,
    pasteClaim: string,
};

class EditorElement extends React.Component<MyProps, MyState> {

    claim = new Claim();
    claimEdge = this.props.claimEdge

    constructor(props: MyProps) {
        super(props);
        if (this.props.new) {
            this.claim = new Claim();
            this.claimEdge = new ClaimEdge(this.props.claimId, this.claim.id)
        } else {
            const awaitClaim = this.props.repository.getClaim(this.props.claimId)
            Promise.all([awaitClaim]).then((values) => {
                if (values[0]) {
                    this.claim = values[0] as Claim;
                }

                const pro = this.claimEdge ? this.claimEdge.pro : true;

                let newState: MyState = {
                    content: this.claim.content,
                    pro: pro,
                    proMain: this.props.proMainContext ? pro : !pro,
                    affects: this.claimEdge ? this.claimEdge.affects.toString() : undefined,
                    priority: this.claimEdge ? this.claimEdge.priority : "",
                    pasteClaim: "",
                }

                if (newState.priority === undefined) { newState.priority = "" } //ToDo: Temp for items with blank priority. mutates state?

                this.setState(newState);
            });

        }

        this.state = {
            content: "",
            pro: true,
            proMain: this.props.proMainContext,
            affects: undefined,
            priority: "",
            pasteClaim: "",
        };

    }

    handleSubmit = () => {
        const actions: Action[] = [];
        if (this.state.pasteClaim && this.claimEdge) {
            actions.push(
                new Action(
                    new ClaimEdge(this.claimEdge.parentId, this.state.pasteClaim, undefined, this.state.pro, this.claimEdge.id, this.state.priority),
                    undefined, "add_claimEdge", this.claimEdge.id
                )
            )
        } else {
            actions.push(
                new Action(
                    new Claim(this.state.content, this.claim.id),
                    undefined, this.props.new? "add_claim" : "modify_claim", this.claim.id
                )
            )
            if (this.claimEdge) {
                actions.push(new Action(
                    new ClaimEdge(this.claimEdge.parentId, this.claimEdge.childId, undefined, this.state.pro, this.claimEdge.id, this.state.priority),
                    undefined, this.props.new? "add_claimEdge" : "modify_claimEdge", this.claimEdge.id
                ))
            }
        }

        calculateScoreActions({
            actions: actions,
            repository: this.props.repository
        }).then((scoreActions) => {
            //TODO: How do I set the glocal state the the new RSData?
            this.props.messenger.notify(actions.concat(scoreActions))
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
        this.setState({ affects: e.currentTarget.value });
    }

    //TODO Add back in Delete
    // handleDelete = async () => {
    //     //TODO : move to repository
    //     const rsData = this.props.repository.rsData as RsData
    //     if (this.claimEdge) {
    //         const edges = rsData.claimEdgesByParentId[this.claimEdge.parentId.toString()]
    //         const index = edges.indexOf(this.claimEdge.id.toString(), 0);
    //         if (index > -1) {
    //             edges.splice(index, 1);
    //         }
    //         const parentClaim = JSON.parse(
    //             JSON.stringify(
    //                 await this.props.repository.getItem(
    //                     this.claimEdge.parentId
    //                 )
    //             )
    //         ) as Claim;
    //         this.props.calculationInitator.notify([new Action(parentClaim)]).then(() => {
    //             this.props.handleEditClose();
    //         });
    //     }
    // }

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
                {this.claimEdge &&
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
                    <div className="btn-group mr-3" role="group" aria-label="Submit">
                        <button type="button" value="Submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    <div className="btn-group mr-3" role="group" aria-label="Cancel">
                        <button type="button" value="Cancel" className="btn btn-secondary" onClick={this.handleCancel}>Cancel</button>
                    </div>
                    {this.claimEdge &&
                        <div className="btn-group ml-5" role="group" aria-label="Delete">
                            <button type="button" value="Delete" className="btn btn btn-outline-danger" >Delete</button>
                            {/* <button type="button" value="Delete" className="btn btn btn-outline-danger" onClick={this.handleDelete}>Delete</button> */}
                        </div>
                    }
                </div>
                <span>ID: {this.claim.id}</span>
            </form>
        );
    }
}

export default EditorElement;
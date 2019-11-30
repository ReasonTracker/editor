import React from 'react';
import { Repository, CalculationInitator, Claim, ClaimEdge, Id, Affects, Change, Messenger, RsData } from "@reasonscore/core";

type MyProps = {
    claimId: Id,
    repository: Repository,
    calculationInitator: CalculationInitator,
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
            const awaitClaim = this.props.repository.getItem(this.props.claimId)
            Promise.all([awaitClaim]).then((values) => {
                if (values[0]) {
                    this.claim = values[0] as Claim;
                }

                const pro = this.claimEdge ? this.claimEdge.pro : true;

                let newState: any = {
                    content: this.claim.content,
                    pro: pro,
                    proMain: this.props.proMainContext ? pro : !pro,
                    affects: this.claimEdge ? this.claimEdge.affects.toString() : undefined,
                }

                this.setState(newState);
            });

        }

        this.state = {
            content: "",
            pro: true,
            proMain: this.props.proMainContext,
            affects: undefined,
        };

    }

    handleSubmit = () => {
        const changes = [
            new Change(new Claim(this.state.content, this.claim.id)),
        ]
        if (this.claimEdge) {
            changes.push(new Change(new ClaimEdge(this.claimEdge.parentId, this.claimEdge.childId, undefined, this.state.pro, this.claimEdge.id)))
        }
        this.props.calculationInitator.notify(changes);
        this.props.handleEditClose();
    }

    handleContent = (e: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({ content: e.currentTarget.value });
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

    handleDelete = async () => {
        //To Do : move to repository
        const rsData = this.props.repository.rsData as RsData
        if (this.claimEdge) {
            const edges = rsData.claimEdgesByParentId[this.claimEdge.parentId.toString()]
            const index = edges.indexOf(this.claimEdge.id.toString(), 0);
            if (index > -1) {
                edges.splice(index, 1);
            }
            const parentClaim = JSON.parse(
                JSON.stringify(
                    await this.props.repository.getItem(
                        this.claimEdge.parentId
                    )
                )
            ) as Claim;
            this.props.calculationInitator.notify([new Change(parentClaim)])
            this.props.handleEditClose();
        }
    }

    handleCancel = () => {
        this.props.handleEditClose();
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" id="claim.content" value={this.state.content} onChange={this.handleContent} rows={2}></textarea>
                    <small className="form-text text-muted">For hyperlinks us <a href="https://spec.commonmark.org/0.29/#links">commonMark</a> syntax:
                    This is [an example](http://example.com/) inline link.</small>
                </div>
                {this.claimEdge &&
                    < >
                    {this.props.proMainContext?"True":"false"}
                        <div className="form-group form-check">
                            <input type="checkbox" id="claimEdge.pro" checked={this.state.pro} onChange={this.handlePro} />
                            <label> Pro Parent</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" id="proMain" checked={this.state.proMain} onChange={this.handleProMain} />
                            <label> Pro Main</label>
                        </div>
                        <div className="form-group">
                            <label>
                                Affects:
                            <select id="claimEdge.affects" value={this.state.affects} onChange={this.handleAffects}>
                                    <option value={Affects.Confidence}>Confidence</option>
                                    <option value={Affects.Relevance}>Relevance</option>
                                </select>
                            </label>
                        </div>

                        <div className="btn-group mr-2" role="group" aria-label="Third group">
                            <button type="button" value="Delete" className="btn btn-secondary" onClick={this.handleDelete}>Delete</button>
                        </div>
                    </>
                }
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" value="Submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" value="Cancel" className="btn btn-secondary" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default EditorElement;
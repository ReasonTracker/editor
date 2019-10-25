import React from 'react';
import { Repository, CalculationInitator, Claim, ClaimEdge, Id, Affects, Change } from "@reasonscore/core";

type MyProps = {
    claimId: Id,
    repository: Repository,
    calculationInitator: CalculationInitator,
    proMainContext: boolean,
    claimEdge?: ClaimEdge,
    handleEditCancel: () => void
};

type MyState = {
    content: string,
    pro?: boolean,
    affects?: string,
};

class EditorElement extends React.Component<MyProps, MyState> {

    claim = this.props.repository.getItem(this.props.claimId) as Claim || new Claim();

    constructor(props: MyProps) {
        super(props);
        this.state = {
            content: this.claim.content,
            pro: props.claimEdge ? props.claimEdge.pro : undefined,
            affects: props.claimEdge ? props.claimEdge.affects.toString() : undefined,
        };
    }

    handleSubmit = () => {
        this.props.calculationInitator.notify([
            new Change(new Claim(this.state.content, this.claim.id)),
        ]);
    }

    handleContent = (e: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({ content: e.currentTarget.value });
    }

    handlePro = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ pro: e.currentTarget.checked });
    }

    handleAffects = (e: React.FormEvent<HTMLSelectElement>) => {
        this.setState({ affects: e.currentTarget.value });
    }

    handleCancel = () => {
        this.props.handleEditCancel();
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" id="claim.content" value={this.state.content} onChange={this.handleContent} rows={2}></textarea>
                </div>
                {this.props.claimEdge &&
                    < >
                        <div className="form-group form-check">
                            <input type="checkbox" id="claimEdge.pro" checked={this.state.pro} onChange={this.handlePro} />
                            <label> Pro Parent</label>
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
import React from 'react';
import { Repository, CalculationInitator, Claim, ClaimEdge, Id } from "@reasonscore/core";

type MyProps = {
    claimId: Id,
    repository: Repository,
    calculationInitator: CalculationInitator,
    proMainContext: boolean,
    claimEdge?: ClaimEdge,
    handleEditCancel: () => void
};

type MyState = {
};

class EditorElement extends React.Component<MyProps, MyState> {
    state: MyState = {
    };

    handleSubmit = () => {
    }

    handleChange = () => {
    }

    handleCancel = () => {
        this.props.handleEditCancel();
    }

    render() {
        const props = this.props;
        const claim = props.repository.getItem(props.claimId) as Claim || new Claim();

        return (
            <form>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" id="claim.content" value={claim.content} onChange={this.handleChange} rows={2}></textarea>
                </div>
                {this.props.claimEdge &&
                    < >
                        <div className="form-group form-check">
                            <input type="checkbox" id="claimEdge.pro" checked={this.props.claimEdge.pro} onChange={this.handleChange} />
                            <label> Pro Parent</label>
                        </div>
                        <div className="form-group">
                            <label>
                                Affects:
                            <select id="claimEdge.affects" value={this.props.claimEdge.affects} onChange={this.handleChange}>
                                    <option value="truth">truth</option>
                                    <option value="relevance">relevance</option>
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
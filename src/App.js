import React, { Component } from 'react';
import ClaimElement from './ClaimElement';
import './App.css';

//alert(newId());

class App extends Component {
  constructor(props) {
    super(props);
    this.repository = props.repository;
  }

  render() {
    return (
      <>
        <ClaimElement class="debate"
          claimId={this.props.claimId}
          repository={this.props.repository}
          calculationInitator={this.props.calculationInitator}
          polarityContext = {true}
        />
        <hr></hr>
      </>
    )
  }
}

export default App;

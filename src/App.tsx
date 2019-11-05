import React from 'react';
import './App.css';
import ClaimElement from './ClaimElement';
import { Repository, CalculationInitator, Id, Messenger } from "@reasonscore/core";


const App: React.FC<{
  claimId: Id,
  repository: Repository,
  calculationInitator: CalculationInitator,
  messenger: Messenger
}> = ({
  claimId,
  repository,
  calculationInitator,
  messenger
}) => (
      <>
        <ClaimElement
          claimId={claimId}
          repository={repository}
          calculationInitator={calculationInitator}
          proMainContext={true}
          messenger = {messenger}
        />
        <hr></hr>
      </>
    );

export default App;

import React from 'react';
import './App.css';
import ScoreElement from './ScoreElement';
import { Messenger, RepositoryLocalPure } from "@reasonscore/core";
import Menu from './Menu';


const App: React.FC<{
  scoreId: string,
  repository: RepositoryLocalPure,
  messenger: Messenger
}> = ({
  scoreId,
  repository,
  messenger
}) => (
      <>
        <Menu repository={repository}
        scoreId={scoreId}
        proMainContext={true}
        messenger={messenger}></Menu>
      </>
    );

export default App;

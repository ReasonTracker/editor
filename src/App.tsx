import React from 'react';
import './App.css';
import { Messenger, RepositoryLocalPure } from "@reasonscore/core";
import Menu from './Menu';


const App: React.FC<{
  scoreId: string,
  repository: RepositoryLocalPure,
  messenger: Messenger,
  settings: any
}> = ({
  scoreId,
  repository,
  messenger,
  settings
}) => (
      <>
        <Menu repository={repository}
        scoreId={scoreId}
        messenger={messenger}
        settings={settings}></Menu>
      </>
    );

export default App;

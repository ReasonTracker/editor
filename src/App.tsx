import React from 'react';
import './custom.scss';
import { Messenger, RepositoryLocalPure } from "@reasonscore/core";
import Menu from './Menu';


const App: React.FC<{
  scoreTreeId: string,
  repository: RepositoryLocalPure,
  messenger: Messenger,
  settings: any
}> = ({
  scoreTreeId,
  repository,
  messenger,
  settings
}) => (
      <>
        <Menu repository={repository}
          scoreTreeId={scoreTreeId}
          messenger={messenger}
          settings={settings}></Menu>
      </>
    );

export default App;

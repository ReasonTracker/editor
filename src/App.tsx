import React from 'react';
import { Messenger, RepositoryLocalPure } from "@reasonscore/core";
import Menu from './Menu';


const App: React.FC<{
  scoreTreeId: string,
  repository: RepositoryLocalPure,
  messenger: Messenger,
  settings: any,
  selectId?: string | null,
}> = ({
  scoreTreeId,
  repository,
  messenger,
  settings,
  selectId
}) => (
      <>
        <Menu repository={repository}
          scoreTreeId={scoreTreeId}
          messenger={messenger}
          settings={settings}
          selectId={selectId}>
        </Menu>
      </>
    );

export default App;

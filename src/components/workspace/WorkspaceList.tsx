import React from 'react';
import WorkspaceCard from './WorkspaceCard';
import { Workspace } from '../../data/workspaces';

interface WorkspaceListProps {
  workspaces: Workspace[];
  cols?: 1 | 2 | 3;
}

const WorkspaceList: React.FC<WorkspaceListProps> = ({ workspaces, cols = 3 }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid ${gridCols[cols]} gap-6`}>
      {workspaces.map((workspace) => (
        <WorkspaceCard key={workspace.id} workspace={workspace} />
      ))}
    </div>
  );
};

export default WorkspaceList;
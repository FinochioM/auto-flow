// src/components/ProjectExplorer.tsx

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const mockProjects = ['Project 1', 'Project 2', 'Project 3'];

export default function ProjectExplorer() {
  return (
    <List>
      {mockProjects.map((project, index) => (
        <React.Fragment key={index}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={project} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}
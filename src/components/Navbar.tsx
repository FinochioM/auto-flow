// src/components/Navbar.tsx

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Check from '@mui/icons-material/Check';

export default function Navbar() {
  const [anchorElFile, setAnchorElFile] = React.useState<null | HTMLElement>(null);
  const [anchorElEdit, setAnchorElEdit] = React.useState<null | HTMLElement>(null);
  const [anchorElView, setAnchorElView] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>, event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>) => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ 
    width: '100%', 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    bgcolor: '#1e1e1e', 
    color: 'white', 
    display: 'flex', 
    justifyContent: 'space-between', // Esto coloca los botones del menú a la izquierda y los de la ventana a la derecha
    borderBottom: '1px solid #333',
    zIndex: 1000,
    padding: '5px 10px',
    }}>
      <Typography variant="h6" component="div" sx={{ marginRight: 'auto', fontSize: '14px', fontWeight: 'bold' }}>
        Auto-Flow
      </Typography>

      {/* Menu File */}
      <Button
        onClick={(e) => handleMenuOpen(setAnchorElFile, e)}
        sx={{
          color: 'white',
          textTransform: 'none',
          padding: '0 15px',
          borderRadius: 0,
          fontSize: '14px',
          '&:hover': {
            bgcolor: '#333',
          },
          transition: 'background-color 0.2s ease',
        }}
      >
        File
      </Button>

      <Menu
        anchorEl={anchorElFile}
        open={Boolean(anchorElFile)}
        onClose={() => handleMenuClose(setAnchorElFile)}
        MenuListProps={{
          sx: {
            bgcolor: '#252526',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            padding: '5px 0',
            '& .MuiMenuItem-root': {
              fontSize: '14px',
              padding: '4px 5px',
              '&:hover': {
                bgcolor: '#3e3e3e',
              },
              transition: 'background-color 0.2s ease',
              textAlign: 'left',
            },
          },
        }}
      >
        <MenuItem>
            <ListItemText sx={{ marginRight: 3 }}>New Project</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
            <ListItemText sx={{ marginRight: 3 }}>Open Project</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
            <ListItemText sx={{ marginRight: 3 }}>Save Project</ListItemText>
        </MenuItem>
      </Menu>

      {/* Menu Edit */}
      <Button
        onClick={(e) => handleMenuOpen(setAnchorElEdit, e)}
        sx={{
          color: 'white',
          textTransform: 'none',
          padding: '0 15px',
          borderRadius: 0,
          fontSize: '14px',
          '&:hover': {
            bgcolor: '#333',
          },
          transition: 'background-color 0.2s ease',
        }}
      >
        Edit
      </Button>

      <Menu
        anchorEl={anchorElEdit}
        open={Boolean(anchorElEdit)}
        onClose={() => handleMenuClose(setAnchorElEdit)}
        MenuListProps={{
          sx: {
            bgcolor: '#252526',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            padding: '5px 0',
            '& .MuiMenuItem-root': {
              fontSize: '14px',
              padding: '10px 20px',
              '&:hover': {
                bgcolor: '#3e3e3e',
              },
              transition: 'background-color 0.2s ease',
            },
          },
        }}
      >
        <MenuItem>
          <ListItemText inset>Undo</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Redo</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Cut</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Copy</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Paste</ListItemText>
        </MenuItem>
      </Menu>

      {/* Menu View */}
      <Button
        onClick={(e) => handleMenuOpen(setAnchorElView, e)}
        sx={{
          color: 'white',
          textTransform: 'none',
          padding: '0 15px',
          borderRadius: 0,
          fontSize: '14px',
          '&:hover': {
            bgcolor: '#333',
          },
          transition: 'background-color 0.2s ease',
        }}
      >
        View
      </Button>

      <Menu
        anchorEl={anchorElView}
        open={Boolean(anchorElView)}
        onClose={() => handleMenuClose(setAnchorElView)}
        MenuListProps={{
          sx: {
            bgcolor: '#252526',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            padding: '5px 0',
            '& .MuiMenuItem-root': {
              fontSize: '14px',
              padding: '10px 20px',
              '&:hover': {
                bgcolor: '#3e3e3e',
              },
              transition: 'background-color 0.2s ease',
            },
          },
        }}
      >
        <MenuItem>
          <ListItemText inset>Zoom In</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Zoom Out</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText inset>Full Screen</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}
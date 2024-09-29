// src/components/Navbar.tsx

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
      bgcolor: '#1e1e1e', // Dark background similar to VSCode
      color: 'white', 
      display: 'flex', 
      justifyContent: 'flex-start',
      borderBottom: '1px solid #333', // Thin border similar to VSCode
      zIndex: 1000,
      padding: '5px 10px',
    }}>
      <Typography variant="h6" component="div" sx={{ marginRight: 'auto', fontSize: '14px', fontWeight: 'bold' }}>
        Auto-Flow
      </Typography>
      <Button
        onClick={(e) => handleMenuOpen(setAnchorElFile, e)}
        sx={{ color: 'white', textTransform: 'none', padding: '0 15px', borderRadius: 0, fontSize: '14px' }} // No border-radius, VSCode-like style
      >
        File
      </Button>
      <Menu
        anchorEl={anchorElFile}
        open={Boolean(anchorElFile)}
        onClose={() => handleMenuClose(setAnchorElFile)}
        MenuListProps={{
          sx: {
            bgcolor: '#252526', // Dark background for the dropdown
            color: 'white',
            '& .MuiMenuItem-root': {
              fontSize: '14px',
              '&:hover': {
                bgcolor: '#3e3e3e', // Slight hover effect
              },
            },
          }
        }}
      >
        <MenuItem onClick={() => handleMenuClose(setAnchorElFile)}>New Project</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setAnchorElFile)}>Open Project</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setAnchorElFile)}>Save Project</MenuItem>
      </Menu>

      <Button
        onClick={(e) => handleMenuOpen(setAnchorElEdit, e)}
        sx={{ color: 'white', textTransform: 'none', padding: '0 15px', borderRadius: 0, fontSize: '14px' }}
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
            '& .MuiMenuItem-root': {
              fontSize: '14px',
              '&:hover': {
                bgcolor: '#3e3e3e',
              },
            },
          }
        }}
      >
        <MenuItem onClick={() => handleMenuClose(setAnchorElEdit)}>Undo</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setAnchorElEdit)}>Redo</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setAnchorElEdit)}>Cut</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setAnchorElEdit)}>Copy</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setAnchorElEdit)}>Paste</MenuItem>
      </Menu>

      <Button
        onClick={(e) => handleMenuOpen(setAnchorElView, e)}
        sx={{ color: 'white', textTransform: 'none', padding: '0 15px', borderRadius: 0, fontSize: '14px' }}
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
            '& .MuiMenuItem-root': {
              fontSize: '14px',
              '&:hover': {
                bgcolor: '#3e3e3e',
              },
            },
          }
        }}
      >
        <MenuItem onClick={() => handleMenuClose(setAnchorElView)}>Zoom In</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setAnchorElView)}>Zoom Out</MenuItem>
        <MenuItem onClick={() => handleMenuClose(setAnchorElView)}>Full Screen</MenuItem>
      </Menu>
    </Box>
  );
}

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { appWindow } from '@tauri-apps/api/window';

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
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '1px solid #333',
      zIndex: 2000,
      userSelect: 'none'
    }}>
      
      {/* Contenedor que envuelve los menús y botones */}
      <Box sx={{ display: 'flex', width: '100%' }}>
        
        {/* Menús de File, Edit, View a la izquierda */}
        <Box sx={{ display: 'flex', '-webkit-app-region': 'no-drag'}}> {/* Área no arrastrable para los menús */}
          <Button onClick={(e) => handleMenuOpen(setAnchorElFile, e)} sx={{ 
            color: '#C0D4DE', 
            textTransform: 'none', 
            fontSize: '12px',
            padding: '2px 4px',
            height: '30px',
            lineHeight: '1.2'
          }}>
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
                  padding: '10px 20px',
                  '&:hover': {
                    bgcolor: '#3e3e3e',
                  },
                },
              },
            }}
          >
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>New Project</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>Open Project</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>Save Project</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>Settings</ListItemText>
            </MenuItem>
          </Menu>

          <Button onClick={(e) => handleMenuOpen(setAnchorElEdit, e)} sx={{ color: '#C0D4DE', textTransform: 'none', fontSize: '12px',            padding: '2px 4px',
            height: '30px',
            lineHeight: '1.2' }}>
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
                },
              },
            }}
          >
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>Undo</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>Redo</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>Paste</ListItemText>
            </MenuItem>
          </Menu>

          <Button onClick={(e) => handleMenuOpen(setAnchorElView, e)} sx={{ color: '#C0D4DE', textTransform: 'none', fontSize: '12px',             padding: '2px 4px',
            height: '30px',
            lineHeight: '1.2' }}>
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
                },
              },
            }}
          >
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>Zoom In</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>Zoom Out</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText sx={{ marginLeft: 0 }}>Full Screen</ListItemText>
            </MenuItem>
          </Menu>
        </Box>

        {/* Área arrastrable entre menús y botones de manejo de ventana */}
        <Box
          onMouseDown={() => appWindow.startDragging()} 
          sx={{ 
            flexGrow: 1,
            cursor: 'grab',  
            '-webkit-app-region': 'drag',
          }}
        />

        {/* Botones de cerrar, minimizar, maximizar a la derecha */}
        <Box sx={{ display: 'flex', '-webkit-app-region': 'no-drag' }}>
          <Button onClick={() => appWindow.minimize()} sx={{ color: '#C0D4DE', textTransform: 'none',             padding: '2px 4px',
            height: '30px',
            lineHeight: '1.2'}}>_</Button>
          <Button onClick={() => appWindow.toggleMaximize()} sx={{ color: '#C0D4DE', textTransform: 'none',             padding: '2px 4px',
            height: '30px',
            lineHeight: '1.2' }}>[ ]</Button>
          <Button onClick={() => appWindow.close()} sx={{ color: '#C0D4DE', textTransform: 'none',             padding: '2px 4px',
            height: '30px',
            lineHeight: '1.2' }}>X</Button>
        </Box>
      </Box>
    </Box>
  );
}

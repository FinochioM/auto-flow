import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ProjectExplorer from './ProjectExplorer';
import Editor from './Editor';

export default function Layout() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Panel lateral usando MUI Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            bgcolor: '#2e2e2e',
            color: 'white',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" noWrap>
            Project Explorer
          </Typography>
          <Divider />
          <ProjectExplorer />
        </Box>
      </Drawer>

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#1e1e1e',
          color: 'white',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Panel superior - Editor de código */}
        <Box sx={{ flexGrow: 1, bgcolor: '#1e1e1e', p: 2 }}>
          <Typography variant="h6">Editor</Typography>
          <Editor />
        </Box>

        {/* Panel inferior - Consola de mensajes */}
        <Box
          sx={{
            height: '200px',
            bgcolor: '#3e3e3e',
            p: 2,
            borderTop: '1px solid #333',
          }}
        >
          <Typography variant="h6">Console</Typography>
          {/* Aquí va la salida de la consola */}
        </Box>
      </Box>
    </Box>
  );
}

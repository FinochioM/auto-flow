import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
//import ProjectExplorer from './ProjectExplorer';
import Editor from './Editor';

export default function Layout() {
  const NAVBAR_HEIGHT = 50;

  return (
    <Box sx={{ display: 'flex', height: `calc(100vh - ${NAVBAR_HEIGHT}px)`, width: '100vw', overflow: 'hidden', marginTop: `${NAVBAR_HEIGHT}px` }}>
      {/* Panel lateral usando MUI Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
            bgcolor: '#2e2e2e',
            color: 'white',
            marginTop: 4.5
          },
        }}
      >
        <Box sx={{ p: 1}}>
          <Typography variant="h6" noWrap>
            Test
          </Typography>
          <Divider />
          {/*<ProjectExplorer />*/}
        </Box>
      </Drawer>

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#1e1e1e',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          marginTop: 2.8,
        }}
      >
        {/* Editor de código */}
        <Box sx={{ flexGrow: 1, overflow: 'hidden', display: 'flex', padding: 0, margin: 0 }}>
          <Editor />
        </Box>
      </Box>
    </Box>
  );
}
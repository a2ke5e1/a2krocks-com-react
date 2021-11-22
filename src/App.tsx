import React from 'react';
import logo from './logo.svg';
import './App.css';
import SaveIcon from '@mui/icons-material/SaveOutlined'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WorkIcon from '@mui/icons-material/WorkOutlineOutlined';
import AboutIcon from '@mui/icons-material/PersonOutline';
import { BoxProps } from '@mui/material/Box';
import { LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import {Divider} from '@mui/material'



function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" variant="outlined" color="transparent" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            a2krocks
          </Typography>
          <Button startIcon={<WorkIcon />} color="inherit">Work</Button>
          <Button startIcon={ <AboutIcon /> } color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
      </header>
      <main>
        Main Content
      </main>
      <footer>
      <Divider light />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'row',
          p: 1,
          m: 2,
          bgcolor: 'background.paper',
        }}
      >
        <Typography variant="subtitle2" component="h2" sx={{ flexGrow: 1 }}>
           &copy; 2021 Apurv Ajay Kumar.
        </Typography>
        <IconButton sx={{
          color : '#0e76a8'
        }} href="/work" aria-label="LinkedIn">
          <LinkedIn />
        </IconButton>
        <IconButton sx={{
          color : '#1DA1F2'
        }} href="/work" aria-label="Twitter">
          <Twitter />
        </IconButton>
        <IconButton sx={{
          color : '#FF0000',
        }} href="/work" aria-label="Youtube">
          <YouTube />
        </IconButton>
      </Box>
        
      </footer>
    </div>
  );
}

export default App;

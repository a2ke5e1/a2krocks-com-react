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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" variant="outlined" color="transparent" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            a2krocks
          </Typography>
          <Button href="/work" startIcon={<WorkIcon />} color="inherit">Work</Button>
          <Button href="/about" startIcon={ <AboutIcon /> } color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


function Work() {
    return (
        <h1>Test</h1>
    ); 
}

function About() {
  return (
      <h1>Test2</h1>
  ); 
}

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <ButtonAppBar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Navigate to="/work" />} />
            <Route  path='/work' element={ <Work />} />
            <Route  path='/about' element={ <About /> } />
          </Routes>
        </main>
        <footer className="footer-name">
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

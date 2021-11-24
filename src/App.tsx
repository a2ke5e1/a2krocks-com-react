import React from 'react';
import logo from './logo.jpg';
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
import { LinkedIn, Twitter, YouTube, MailOutline } from '@mui/icons-material';
import { Divider, Grid, Container } from '@mui/material'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import About from './Pages/About/About'
import Work from './Pages/Work/Work'
import Project0 from './Projects/Project0/Project0'
import Project1 from './Projects/Project1/Project1'
import Project2 from './Projects/Project2/Project2'


function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" variant="outlined" color="transparent" >
        <Toolbar>
          <div><img width="50px" src={logo} /></div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 1 }}>
            <a href="/" className="a2k_link" > a2krocks</a>
          </Typography>
          <Button href="/work" startIcon={<WorkIcon />} color="inherit">Work</Button>
          <Button href="/about" startIcon={<AboutIcon />} color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}




function App() {


  const linkedinURL = "https://www.linkedin.com/in/a2krocks/"
  const twitterURL = "https://twitter.com/a2krocks"
  const youtubeURL = "https://www.youtube.com/channel/UCvPYsqZOD55Ri--1votZnaA"
  const mailURL = "mailto:aakapurv@gmail.com"

  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Navigate to="/work" />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path="/projects/0" element={<Project0 />} />
          <Route path="/projects/1" element={<Project1 />} />
          <Route path="/projects/2" element={<Project2 />} />
        </Routes>
      </main>
      <footer className="footer-name">
        <Divider light />
        <Grid container direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            p: 3
          }}
        >


          <Grid item>
            <Typography variant="subtitle2" component="h2" sx={{ flexGrow: 1 }}>
              &copy; 2021. All Rights Reserved to Apurv Ajay Kumar.
            </Typography>
          </Grid>

          <Grid item>
            <Container>
              <IconButton href={mailURL} aria-label="Email">
                <MailOutline />
              </IconButton>
              <IconButton sx={{
                color: '#0e76a8'
              }} href={linkedinURL} aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
              <IconButton sx={{
                color: '#1DA1F2'
              }} href={twitterURL} aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton sx={{
                color: '#FF0000',
              }} href={youtubeURL} aria-label="Youtube">
                <YouTube />
              </IconButton>
            </Container>
          </Grid>

        </Grid>

      </footer>
    </div>
  );
}

export default App;

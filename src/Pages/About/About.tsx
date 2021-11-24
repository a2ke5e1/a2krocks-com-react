import React from 'react'

import logo from '../../logo.jpg';
import './About.css'
import { Typography, Grid, Box, Card, Stack, Container, Button, ButtonGroup } from '@mui/material'
import { Mail, LinkedIn } from '@mui/icons-material'



function About() {

    const linkedinURL = "https://www.linkedin.com/in/a2krocks/"
    const twitterURL = "https://twitter.com/a2krocks"
    const youtubeURL = "https://www.youtube.com/channel/UCvPYsqZOD55Ri--1votZnaA"
    const mailURL = "mailto:aakapurv@gmail.com"

    return (
        <Container  >

            <Grid justifyContent="center" container sx={{
                mt: 2,
                mb: 2
            }} columnSpacing={2}  >


                <Grid item >

                    <img src={logo} className="img-photo" />

                </Grid>


                <Grid item xs >
                    <Container>
                        <a className="greeting-name">
                            Hello! I am Apurv!
                        </a>
                        <Box sx={{ mt: 1 }}>
                            <Typography align="justify" component="p" variant="subtitle1" sx={{ color: "#575757" }} >
                                I am currently a B.Tech Student studying at Haldia Institute Of Technology. I like to work on UX and bring designs to life.
                                I also like to develop android apps.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <Button href="/resume.pdf" download variant="outlined"> RESUME</Button>
                        </Box>

                        <Box sx={{ mt: 3 }}>
                            <Typography variant="caption" >
                                Let's get in touch
                            </Typography>
                        </Box>

                        <ButtonGroup sx={{
                            mt: 1,
                            mb: 5
                        }} variant="outlined"  >

                            <Button startIcon={<Mail />} href={mailURL} >Email</Button>
                            <Button startIcon={<LinkedIn />} href={linkedinURL} >LinkedIn</Button>

                        </ButtonGroup>


                    </Container>
                </Grid>

            </Grid>
        </Container>
    );
}

export default About;
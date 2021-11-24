import { Container, Typography, Card, CardActions, CardContent, Button, Grid, Box, CardActionArea, CardMedia, Paper } from '@mui/material'
import cover from "../../imgs/project2/cover.png"
import "./Project2.css"

import paperWireframe from "../../imgs/project2/paper_wireframe.jpg"

import l1 from "../../imgs/project2/wireframe/1.png"
import l2 from "../../imgs/project2/wireframe/2.png"
import l3 from "../../imgs/project2/wireframe/3.png"

import Iframe from 'react-iframe'

function Project0() {

    const cardWidth = 360
    const cardHeight = 110

    return (
        <Container>
            <Typography sx={{ mt: 3 }} variant="h1" component="h2" align="center" className="cover-title" fontWeight="500">
                Medk
            </Typography>
            <Typography sx={{ mt: 1, mb: 3 }} variant="h5" component="h2" align="center" className="cover-title" fontWeight="300">
                A tool for communities to ensure that everyone has access to necessary medicine
            </Typography>
            <img src={cover} className="cover-page" />
            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center" spacing={2}
            >
                <Grid item  >
                    <Card variant="outlined" sx={{ width: cardWidth, height: cardHeight, borderColor: '#dae2ef', borderRadius: 3 }}>
                        <CardActionArea >
                            {/* <CardMedia
                                component="img"
                                height="200"
                                image={cover0}
                                alt="green iguana"
                            /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 14 }}>
                                    My Role
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    I was working alone on this project, hence I was the lead UX Designer and Researcher throught the whole project.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item  >
                    <Card variant="outlined" sx={{ width: cardWidth, height: cardHeight, borderColor: '#dae2ef', borderRadius: 3 }}>
                        <CardActionArea >
                            {/* <CardMedia     
                                component="img"
                                height="200"
                                image={cover0}
                                alt="green iguana"
                            /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 14 }}>
                                    Project Goal
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This products aims to help people find their medicine in locality or order them online.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item  >
                    <Card variant="outlined" sx={{ width: cardWidth, height: cardHeight, borderColor: '#dae2ef', borderRadius: 3 }}>
                        <CardActionArea >
                            {/* <CardMedia
                                component="img"
                                height="200"
                                image={cover0}
                                alt="green iguana"
                            /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 14 }}>
                                    Target Audience
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align="justify" >
                                    This projects aims to target elderly people. Especially people who have limited motor function.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            <Typography sx={{ mt: 3, mb: 3 }} variant="h4" fontWeight="700"  >
                Key challenges and Constraints
            </Typography>
            <Typography variant="h6" fontWeight="400" align="justify" color="text.secondary" maxWidth="320px" >
                Key challenges were to provide a respomsive design to mobile and web to find medicine. <br /><br /> Many people needs medicine that they can’t find in their locality.
            </Typography>
            <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                Initial design concepts
            </Typography>
            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center" spacing={2}
            >
                <Grid item>
                    <Typography sx={{ mt: 3, maxWidth: 345, fontSize: 20 }} align="justify" fontWeight="400" variant="h6" color="text.secondary"   >
                        I did a quick ideation exercise to come up with ideas for how to address gaps identified in the competitive audit. My focus was specially on size on the actions and minimum clicks to complete a task.
                    </Typography>
                </Grid>
                <Grid item >
                    <Card variant="outlined" sx={{ minWidth: cardWidth, borderColor: '#dae2ef', borderRadius: 3 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={paperWireframe}
                                alt="green iguana"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                Wireframes
            </Typography>
            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center" spacing={2}
                sx={{ mt: 2 }}
            >
                <Grid item>
                    <Paper elevation={2} sx={{ borderRadius: 3, p: 1 }} >
                        <img width="350px" src={l1} />
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper elevation={2} sx={{ borderRadius: 3, p: 1 }} >
                        <img width="350px" src={l2} />
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper elevation={2} sx={{ borderRadius: 3, p: 1 }} >
                        <img width="350px" src={l3} />
                    </Paper>
                </Grid>
            </Grid>
            <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                User testing Results
            </Typography>
            <Typography sx={{ mt: 3, mb: 3 }} variant="h6" fontWeight="400" align="justify" color="text.secondary" maxWidth="320px">
                After lot of user feedback and testing. I have conclude it easier to removed reminder and have bigger cards to see stores.
            </Typography>

            <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                High-fidelity prototypes
            </Typography>


            <Typography sx={{ mt: 3, ml: 3 }} variant="h6" fontWeight="300" >
                Mobile
            </Typography>
            <Iframe className="iframe-margin" url="https://xd.adobe.com/embed/10c0dcb1-1ef9-4708-b20b-443772350c10-4593/"
                width="100%"
                height="500px"
                allowFullScreen
            />

            <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                Takeways
            </Typography>
            <Typography sx={{ mt: 3, mb: 3 }} variant="body1" fontWeight="500" color="text.secondary">
                While doing this project I have increase my knowledge and experience on using Adobe XD to create prototypes for my upcoming project. I also learned to create responsive web design. <br /> <br />
                While working on this project i have learned various skills and importance of accessibility. Usability studies and peers feedback was one of the most important   inflactal in each iteration of the app’s look and feel.<br /> <br />
                While doing this project I have increase my knowledge and experience on using Adobe XD to create prototypes for my upcoming project. I also learned to create responsive web design.
            </Typography>


        </Container>
    );
}

export default Project0;
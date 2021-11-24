import { Container, Typography, Card, CardActions, CardContent, Button, Grid, Box, CardActionArea, CardMedia, Paper } from '@mui/material'
import cover from "../../imgs/project0/cover.png"
import "./Project0.css"

import paperWireframe from "../../imgs/project0/paper_wfireframe.jpg"

function Project0() {

    const cardWidth = 360
    const cardHeight = 110

    return (
        <Container>
            <Typography sx={{ mt: 3, mb: 3 }} variant="h1" component="h2" align="center" className="cover-title" fontWeight="500">
                Foody
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
                                    Create a smooth experience between opening an app for first time to order their favourite food with any waste of time.
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
                                <Typography variant="body2" color="text.secondary">
                                    This projects aims to target people with all age group. Especially people are busy in their lives and can't cook their own food.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                Key challenges and Constraints
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
                    <Typography sx={{ mt: 3, maxWidth: 345, fontSize: 20 }} fontWeight="400" variant="h6" color="text.secondary"   >
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
        </Container>
    );
}

export default Project0;
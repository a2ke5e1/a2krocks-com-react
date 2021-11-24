import React from 'react'
import { Grid, Container, Box } from '@mui/material'
import './Work.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';
import logo from '../../logo.jpg';

function Work() {

    const cardWidth = 360
    const cardHeight = 340

    return (
        <Box sx={{
            m: 2
        }} >
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center" spacing={2}
            >
                <Grid item  >
                    <Card variant="outlined" sx={{ width: cardWidth }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={logo}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Project: 0
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Design a mobile food ordering app for a Restaurant.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button href="/projects/0" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item  >
                    <Card variant="outlined" sx={{ width: cardWidth }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={logo}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Project: 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Design a website for finding and viewing coding tutorials
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button href="/projects/1" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item  >
                    <Card variant="outlined" sx={{ width: cardWidth }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={logo}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Project: 2
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Design a tool for communities to ensure that everyone has access to necessary medicine
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button href="/projects/2" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Work;
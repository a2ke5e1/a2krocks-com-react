import React from 'react'
import { Grid, Box } from '@mui/material'
import './Work.css'
import cover0 from '../../imgs/project0/cover.png'
import cover1 from '../../imgs/project1/cover.png'
import cover2 from '../../imgs/project2/cover.png'
import { ProjectCard } from '../../Components/ProjectCard';


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
                    <ProjectCard
                        title="Project: 0"
                        description="A mobile food ordering app designed for a local restaurant."
                        image={cover0}
                        link="/projects/0"
                    />
                </Grid>
                <Grid item  >
                    <ProjectCard
                        title="Project: 1"
                        description="An educationl website for learning programming by finding and viewing coding tutorials."
                        image={cover1}
                        link="/projects/1"
                    />
                </Grid>
                <Grid item  >
                    <ProjectCard
                        title="Project: 2"
                        description="A tool for communities to ensure that everyone has access to necessary medicine."
                        image={cover2}
                        link="/projects/2"
                    />
                </Grid>
                <Grid item  >
                    <ProjectCard
                        title="Project: 3"
                        description="An android app which shows progress of the day, month and year."
                        image={cover2}
                        link="/projects/3"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Work;
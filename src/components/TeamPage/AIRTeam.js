import React from 'react';
import './App.css';
import { Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeamMemberCard from './TeamMemberCard';
import mradul from './photos/mradul.jpg';
import saurabh from './photos/saurabhshukla.jpg';
import aonir from './photos/aonir.jpg';
import malvika from './photos/malvika.jpg';
import brist from './photos/bristi.jpg';

export default function AIRteam(props){
  const teamName = "AIR Team"
    return (
    <div>
      <div>

      <Box m={5}><Typography variant="h3" align="left">{teamName}</Typography></Box>
      </div>
        {/* <Box m={3} p={1} color="white" bgcolor="black">
                    <h4>{desc}</h4>
        </Box> */}
        <div>
          <Grid>
          <Grid container>            
            <Grid item xs={12}>
              <Box p={1}> 
                <Grid container spacing={2}>
                <Grid ><TeamMemberCard imageURL={brist} name="Bristi Panja" linkedinURL="https://www.linkedin.com/in/bristi-panja-52021b16b/" githubURL="" email="singh_961919@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={mradul} name="Mradul Singh" linkedinURL="https://www.linkedin.com/in/mridul-singh-271a881ab" githubURL="" email="singh_961919@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={saurabh} name="Saurabh Shukla" linkedinURL="https://www.linkedin.com/in/saurabh-shukla-ba6b8a1b6/" githubURL="" email="shukla_841926@student.nitw.ac.ins" /></Grid>
                  <Grid ><TeamMemberCard imageURL={aonir} name="Aonirjito Goswaami" linkedinURL="https://www.linkedin.com/in/aonirjito-goswaami-b83b881b0" githubURL="" email="Ag821817@student.nitw.ac.in"/></Grid>
                  <Grid ><TeamMemberCard imageURL={malvika} name="Malvika Singh" linkedinURL="https://www.linkedin.com/in/malvika-singh-635193194/" githubURL="" email="ms911805@student.nitw.ac.in" /></Grid>
                 </Grid>
                </Box>
            </Grid>
          </Grid>
          </Grid>
          </div>
        </div>
    );
}
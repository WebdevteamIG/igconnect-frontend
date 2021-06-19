import React from 'react';
import './App.css';
import { Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeamMemberCard from './TeamMemberCard';
import saurabh from './photos/saurabhshukla.jpg';
import aonir from './photos/aonir.jpg';
import malvika from './photos/malvika.jpg';
import jaahnavi from './photos/jaahnavi.jpeg';
import satvik from './photos/satvik.jpeg';
import lakshya from './photos/lakshya.jpeg'
import srijana from './photos/srijana.jpg'
import meghna from './photos/meghna.jpeg'
import gautam from './photos/gautam.jpeg'
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
                <Grid ><TeamMemberCard imageURL={malvika} name="Malvika Singh" linkedinURL="https://www.linkedin.com/in/malvika-singh-635193194/" githubURL="" email="ms911805@student.nitw.ac.in" /></Grid>
                <Grid ><TeamMemberCard imageURL={aonir} name="Aonirjito Goswaami" linkedinURL="https://www.linkedin.com/in/aonirjito-goswaami-b83b881b0" githubURL="" email="Ag821817@student.nitw.ac.in"/></Grid>
                <Grid ><TeamMemberCard imageURL={saurabh} name="Saurabh Shukla" linkedinURL="https://www.linkedin.com/in/saurabh-shukla-ba6b8a1b6/" githubURL="" email="shukla_841926@student.nitw.ac.ins" /></Grid>
                <Grid ><TeamMemberCard imageURL={jaahnavi} name="Sai Jaahnavi Guntupalli" linkedinURL="https://www.linkedin.com/in/jaahnavi/" githubURL="https://github.com/jaahnavi-2001" email="jaahnavi2001@gmail.com" /></Grid>
                <Grid ><TeamMemberCard imageURL={satvik} name="Satvik Yandapalli " linkedinURL="https://www.linkedin.com/in/satvik-yandapalli-55b9831a7" githubURL="" email="Yandap_841909@student.nitw.ac.in" /></Grid>
                <Grid ><TeamMemberCard imageURL={lakshya} name="Lakshya Jalan" linkedinURL="https://www.linkedin.com/in/lakshya-jalan-5063b3206/" githubURL="" email="lj812071@student.nitw.ac.in" /></Grid>  
                <Grid ><TeamMemberCard imageURL={srijana} name="Srijana Baruah" linkedinURL="" githubURL="" email="sb852007@student.nitw.ac.in" /></Grid>  
                <Grid ><TeamMemberCard imageURL={meghna} name="Meghana Bhanuprasad" linkedinURL="" githubURL="" email="mb942076@student.nitw.ac.in" /></Grid>
                <Grid ><TeamMemberCard imageURL={gautam} name="Gautam Prakash" linkedinURL="http://linkedin.com/in/gautam-prakash-082424209" githubURL="" email="GP932076@student.nitw.ac.in" /></Grid>
                </Grid>
                </Box>
            </Grid>
          </Grid>
          </Grid>
          </div>
        </div>
    );
}
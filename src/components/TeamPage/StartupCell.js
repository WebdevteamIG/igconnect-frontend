import React from 'react';
import './App.css';
import { Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeamMemberCard from './TeamMemberCard';
import aakash from './photos/aakash.png'
import arpit from './photos/arpit.jpg';
import murlidhar from './photos/murlidhar.jpg';
import sushyant from './photos/sushyant.jpeg';
import ankush from './photos/ankush.jpg';
import mridul from './photos/mridul.jpg'
import siddharth from './photos/siddharth.jpg'
import santhosh from './photos/santhosh.png'
export default function StartupCell(props){
  const teamName = "Startup Cell"
    return (
    <div>
      <div>
      <Box m={5} ><Typography variant="h3" align="left">{teamName}</Typography></Box>
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
                  <Grid ><TeamMemberCard imageURL={arpit} name="Arpit Goyal" linkedinURL="https://www.linkedin.com/in/arpit-goyal007/" githubURL="https://github.com/argenestel" email="ag841836@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={aakash} name="Aakash Kumar" linkedinURL="https://www.linkedin.com/in/aakash074/" githubURL="https://github.com/Aakash074" email="aakashkumaar074@gmail.com" /></Grid>
                  <Grid ><TeamMemberCard imageURL={ankush} name="Ankush Mittal" linkedinURL="http://linkedin.com/in/imankush" githubURL="http://github.com/ankushmittal1008" email="am811869@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={murlidhar} name="Muralidhar Vedantam" linkedinURL="https://www.linkedin.com/in/muralidhar-vedantam-576a36129/" githubURL="" email="vv862013@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={sushyant} name="Sushyanth Sridhar" linkedinURL="https://www.linkedin.com/in/sushyanth-sridhar-0360171b5/" githubURL="" email="sridha_831973@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={mridul} name="Mradul" linkedinURL="https://www.linkedin.com/in/mridul-singh-271a881ab/" githubURL="" email="singh_961919@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={siddharth} name="Siddharth Katiyar" linkedinURL="http://linkedin.com/in/siddharth-katiyar-62b796190" githubURL="https://github.com/siddharth177" email="katiya_811928@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={santhosh} name="Shantosh Cumarasurier " linkedinURL="https://www.linkedin.com/in/shantoshcumarasurier/" githubURL="" email="ganesh_851979@student.nitw.ac.in" /></Grid>
                </Grid>
                </Box>
            </Grid>
          </Grid>
          </Grid>
          </div>
        </div>
    );
}
import React from 'react';
import './App.css';
import { Box,Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeamMemberCard from './TeamMemberCard';
import harsh from './photos/harsh.png';
import abitha from './photos/abitharao.jpg';
import bhagya from './photos/bhagya.jpg';
import siddharth from './photos/siddharth.jpg';
import anshika from './photos/anshika.jpg';

export default function ECCTeam(props){
 const teamName = "ECC Team"
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
                  <Grid ><TeamMemberCard imageURL={harsh} name="Harsh Garodia" linkedinURL="" githubURL="" email="harshgarodia05@gmail.com" /></Grid>
                  <Grid ><TeamMemberCard imageURL={abitha} name="Abitha Rao" linkedinURL="https://www.linkedin.com/in/abitha-rao-5293401a7" githubURL="" email="abitharaok@gmail.com" /></Grid>
                  <Grid ><TeamMemberCard imageURL={bhagya} name="Bhagya Trivedi" linkedinURL="https://www.linkedin.com/in/bhagya-trivedi-5753aa114/" githubURL="https://github.com/Bhagyatrivedi27" email="bhagyatrivedi20273@gmail.com"/></Grid>
                  <Grid ><TeamMemberCard imageURL={siddharth} name="Siddarth Chintalapati" linkedinURL="https://www.linkedin.com/in/siddarth-chintalapati" githubURL="" email="sc941871@gmail.com" /></Grid>
                  <Grid ><TeamMemberCard imageURL={anshika} name="Anshika Shrivastav" linkedinURL="https://www.linkedin.com/in/anshika-shrivastav-bb28a01ab" githubURL="" email="ashrivastav@student.nitw.ac.in"/></Grid>
                 </Grid>
                </Box>
            </Grid>
          </Grid>
          </Grid>
          </div>
        </div>
    );
}
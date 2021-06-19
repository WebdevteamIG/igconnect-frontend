import React from 'react';
import './App.css';
import { Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeamMemberCard from './TeamMemberCard';
import shriya from './photos/shriya.jpg';
import chahat from './photos/chahat.jpg';
import thanish from './photos/thanish.jpg';
import sreeharsha from './photos/sreeharsha.jpeg';
import srashti from './photos/srashti.jpg';
import ankit from './photos/ankit.jpeg';

export default function DesignTeam(props){
const teamName = "Design Team"
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
                  { <Grid ><TeamMemberCard imageURL={ankit} name="Ankit Akkiredi" linkedinURL="https://www.linkedin.com/in/ankit-kumar-akkiredi-975374189/" githubURL="" email="ankit.k.akkiredi2001@gmail.com" /></Grid> }
                  { <Grid ><TeamMemberCard imageURL={shriya} name="Shriyadita Nath" linkedinURL="NA" githubURL="" email="shriyadita.nath01@gmail.com" /></Grid> }
                  { <Grid ><TeamMemberCard imageURL={chahat} name="Chahat" linkedinURL="www.linkedin.com/in/chahatl" githubURL="https://github.com/ChahatL" email="chahatl3003@gmail.com" /></Grid> }
                  { <Grid ><TeamMemberCard imageURL={thanish} name="Thanish Nasir" linkedinURL="https://www.linkedin.com/in/thanish-ahammed-586660141/" githubURL="https://github.com/TNA3" email="thanish@outlook.com" /></Grid> }
                  { <Grid ><TeamMemberCard imageURL={sreeharsha} name="A.Sai Sreeharsha" linkedinURL="" githubURL="" email="ss832073@student.nitw.ac.in" /></Grid> }
                  { <Grid ><TeamMemberCard imageURL={srashti} name="Srashti Yadav" linkedinURL="" githubURL="" email="sy862037@student.nitw.ac.in " /></Grid> }
                </Grid>
                </Box>
            </Grid>
          </Grid>
          </Grid>
          </div>
        </div>
    );
}
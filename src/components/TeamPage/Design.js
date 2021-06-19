import React from 'react';
import './App.css';
import { Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeamMemberCard from './TeamMemberCard';
// import nitin from './photos/nitin.jpg';

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
                  {/* <Grid ><TeamMemberCard imageURL={nitin} name="Nitin Bhatia" linkedinURL="https://in.linkedin.com/in/aditya-nittala-87b20b17a" githubURL="" email="tasksfornitin@gmail.com" /></Grid> */}
                </Grid>
                </Box>
            </Grid>
          </Grid>
          </Grid>
          </div>
        </div>
    );
}
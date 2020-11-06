import React from 'react';
import './App.css';
import { Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeamMemberCard from './TeamMemberCard';
import akhila from './photos/akhila.jpg'
import aditya from './photos/aditya.jpg';
import shubham from './photos/shubhamdas.jpg';

export default function PRTeam(props){

  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor magna libero, sed consequatmauris aliquet in.is placerat, neque neque rutrum lacus, nec luctut, non tristique dolor porttitor. Suspendisse leo libero, facilisis congue velit at, varius iaculis odio. Vestibulum rutrum dignissim fermentum. ";
  const teamName = "PR Team"
    return (
    <div>
      <div>
      <Box m={5} ><Typography variant="h3" align="left">{teamName}</Typography></Box>
      </div>
        <Box m={3} p={1} color="white" bgcolor="black">
                    <h4>{desc}</h4>
        </Box>
      
        <div>
          <Grid>
          <Grid container>            
            <Grid item xs={12}>
              <Box p={1}> 
                <Grid container spacing={2}>
                  <Grid ><TeamMemberCard imageURL={aditya} name="Aditya Nittala" linkedinURL="https://in.linkedin.com/in/aditya-nittala-87b20b17a" githubURL="
" email="srisai@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={shubham} name="Shubham Das" linkedinURL="https://www.linkedin.com/in/shubham-sanjeev-das" githubURL="
" email="sd921871@student.nitw.ac.in" /></Grid>
                  
                  <Grid ><TeamMemberCard imageURL={akhila} name="V Dakshayani Akhila" linkedinURL="https://www.linkedin.com/in/dakshayani-akhila-1194b217a" githubURL="
" email="va921855@student.nitw.ac.in" /></Grid>
                  
                </Grid>
                </Box>
            </Grid>
          </Grid>
          </Grid>
          </div>
        </div>
    );
}
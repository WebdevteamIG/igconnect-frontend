import React from 'react';
import './App.css';
import { Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeamMemberCard from './TeamMemberCard';
import shubhamdas from './photos/shubhamdas.jpg';
import pavan from './photos/pavan.jpeg'
import tanzeela from './photos/tanzeela.jpeg'
import supriya from './photos/supriya.jpeg'
import shubham from './photos/shubham.jpeg'
import paila from './photos/paila.jpg'
import nishanth from './photos/nishanth.jpg'
import aditya_joshi from './photos/aditya_joshi.jpeg'
export default function PRTeam(props){
  const teamName = "PR Team"
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
                <Grid ><TeamMemberCard imageURL={shubhamdas} name="Shubham Das" linkedinURL="https://www.linkedin.com/in/shubham-sanjeev-das" githubURL="" email="sd921871@student.nitw.ac.in" /></Grid>
                <Grid ><TeamMemberCard imageURL={nishanth} name="Nishanth Preetham" linkedinURL="https://www.linkedin.com/in/nishanth-preetham-76a1621b1" githubURL="" email="ng821831@student.nitw.ac.in" /></Grid>  
                <Grid ><TeamMemberCard imageURL={pavan} name="Chava Pavan Kumar" linkedinURL="http://www.linkedin.com/in/chava-pavan-kumar-0593211b7" githubURL="" email="chava_961918@student.nitw.ac.in" /></Grid>
                <Grid ><TeamMemberCard imageURL={tanzeela} name="Tanzeela Inam" linkedinURL="https://www.linkedin.com/in/tanzeela-inam-0b48961b9/" githubURL="" email="inam_831984@student.nitw.ac.in" /></Grid>
                <Grid ><TeamMemberCard imageURL={aditya_joshi} name="Aditya Joshi" linkedinURL="" githubURL="" email="joshi_851975@student.nitw.ac.in" /></Grid>
                <Grid ><TeamMemberCard imageURL={supriya} name="Supriya gude" linkedinURL="" githubURL="" email="supriyagude24@gmail.com" /></Grid>
                <Grid ><TeamMemberCard imageURL={shubham} name="Shubham Bapna" linkedinURL="https://www.linkedin.com/in/shubham-bapna-04109b1b3" githubURL="" email="bapna_871975@student.nitw.ac.in" /></Grid>
                <Grid ><TeamMemberCard imageURL={paila} name="Paila Laxmi Priya" linkedinURL="https://www.linkedin.com/in/laxmi-priya-paila-879964213" githubURL="" email="pl832049@student.nitw.ac.in" /></Grid>
                </Grid>
                </Box>
            </Grid>
          </Grid>
          </Grid>
          </div>
        </div>
    );
}
import React from 'react';
import './App.css';
import { Box,Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeamMemberCard from './TeamMemberCard';
import ajeet from './photos/ajeet.jpg';
import santhi from './photos/santhikiran.jpg';
import saiteja from './photos/saiteja.jpeg';
import somal from './photos/somal.png';
import abhinav from './photos/abhinav.jpg';
import fateen from './photos/fateen.jpeg';
import harjeet from './photos/harjeet.jpg';
import ishitha from './photos/ishitha.jpg';

export default function TechTeam(props){
  const teamName = "Technical Team"
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
                  <Grid ><TeamMemberCard imageURL={saiteja} name="CH Sai Teja" linkedinURL="https://www.linkedin.com/in/sai-teja-ch-a0a50b18b/" githubURL="https://github.com/saitejach127" email="saitejach127@gmail.com"/></Grid>
                  <Grid ><TeamMemberCard imageURL={ajeet} name="Ajeet Singh" linkedinURL="https://www.linkedin.com/in/raba-ajeet/" githubURL="https://github.com/raba-ajeet" email="raba.ajeet@gmail.com" /></Grid>
                  <Grid ><TeamMemberCard imageURL={santhi} name="Santhi Kiran Bura" linkedinURL="https://www.linkedin.com/in/santhi-kiran-bura/" githubURL="https://github.com/santhikiranbura" email="santhikiran0802@gmail.com" /></Grid>
                  <Grid ><TeamMemberCard imageURL={somal} name="Somal Chakraborty" linkedinURL="https://www.linkedin.com/in/somal-chakraborty-8752a6189/" githubURL="https://github.com/SomalRudra" email="sc941871@gmail.com" /></Grid>
                  <Grid ><TeamMemberCard imageURL={abhinav} name="Abhinav Srivastava" linkedinURL="https://www.linkedin.com/in/abhinav-srivastava-993523190" githubURL="https://github.com/abhinavs27" email="srivas_811969@student.nitw.ac.in"/></Grid>
                  <Grid ><TeamMemberCard imageURL={fateen} name="Fateen Ahmed" linkedinURL="https://www.linkedin.com/in/fateen-ahmed" githubURL="" email="fateen099@outlook.com"/></Grid>
                  <Grid ><TeamMemberCard imageURL={harjeet} name="Harjeet Singh" linkedinURL="https://www.linkedin.com/in/har-jeet-1392861aa/" githubURL="https://www.github.com/harry-dev98" email="hs921818@student.nitw.ac.in"/></Grid>
                  <Grid ><TeamMemberCard imageURL={ishitha} name="Ishita Gupta" linkedinURL="" githubURL="https://github.com/cd-Ishita" email="ishitagupta.hyd@gmail.com"/></Grid>
                
                </Grid>
                </Box>
            </Grid>
          </Grid>
          </Grid>
          </div>
        </div>
    );
}
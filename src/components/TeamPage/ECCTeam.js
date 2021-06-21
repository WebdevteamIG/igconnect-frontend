import React from 'react';
import './App.css';
import { Box,Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TeamMemberCard from './TeamMemberCard';
import harsh from './photos/harsh.png';
import abitha from './photos/abitharao.jpg';
import venkatesh from './photos/venkatesh.png';
import akshat from './photos/akshat.jpeg';
import lakshayapriya from './photos/lakshayapriya.jpeg';
import satwik from './photos/satwik.jpg';
import keerthi from './photos/keerthi.jpeg'

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
                  <Grid ><TeamMemberCard imageURL={venkatesh} name="Venkatesh Thota" linkedinURL="https://www.linkedin.com/in/venkatesh-thota-3b13871b7" githubURL="" email="thota_821975@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={akshat} name="Akshat Rai Laddha" linkedinURL="https://www.linkedin.com/in/akshat-rai-laddha-8905a0189" githubURL="" email="ar832035@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={lakshayapriya} name="S.S. Lakshayapriya" linkedinURL="https://www.linkedin.com/in/lakshayapriya-s-s-432367204" githubURL="" email="laksha_951977@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={satwik} name="Yagna Satwik" linkedinURL="https://www.linkedin.com/in/yagna-satwik-59b31b214/" githubURL="" email="ys972073@student.nitw.ac.in" /></Grid>
                  <Grid ><TeamMemberCard imageURL={keerthi} name="Mikkilineni Venkata Sai Keerthi" linkedinURL="https://www.linkedin.com/in/keerthi-m-71b4a019b" githubURL="" email="mv932016@student.nitw.ac.in" /></Grid>
                 </Grid>
                </Box>
            </Grid>
          </Grid>
          </Grid>
          </div>
        </div>
    );
}
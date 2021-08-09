import React from "react";
import "./App.css";
import { Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TeamMemberCard from "./TeamMemberCard";
import bhagya from "./photos/bhagya.jpg";
import somal from "./photos/somal.png";
import fateen from "./photos/fateen.jpeg";
import ishitha from "./photos/ishitha.jpg";
import divya from "./photos/divya.jpg";
import rithik from "./photos/rithik.jpg";
import manav from "./photos/manav.jpg";
export default function TechTeam(props) {
  const teamName = "Technical Team";
  return (
    <div>
      <div>
        <Box m={5}>
          <Typography variant="h3" align="left">
            {teamName}
          </Typography>
        </Box>
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
                  <Grid>
                    <TeamMemberCard
                      imageURL={bhagya}
                      name="Bhagya Trivedi"
                      linkedinURL="https://www.linkedin.com/in/bhagya-trivedi-5753aa114/"
                      githubURL="https://github.com/Bhagyatrivedi27"
                      email="bhagyatrivedi20273@gmail.com"
                    />
                  </Grid>
                  <Grid>
                    <TeamMemberCard
                      imageURL={somal}
                      name="Somal Chakraborty"
                      linkedinURL="https://www.linkedin.com/in/somal-chakraborty-8752a6189/"
                      githubURL="https://github.com/SomalRudra"
                      email="sc941871@gmail.com"
                    />
                  </Grid>
                  <Grid>
                    <TeamMemberCard
                      imageURL={fateen}
                      name="Fateen Ahmed"
                      linkedinURL="https://www.linkedin.com/in/fateen-ahmed"
                      githubURL=""
                      email="fateen099@outlook.com"
                    />
                  </Grid>
                  <Grid>
                    <TeamMemberCard
                      imageURL={ishitha}
                      name="Ishita Gupta"
                      linkedinURL=""
                      githubURL="https://github.com/cd-Ishita"
                      email="ishitagupta.hyd@gmail.com"
                    />
                  </Grid>
                  <Grid>
                    <TeamMemberCard
                      imageURL={divya}
                      name="Divya Soni"
                      linkedinURL="https://www.linkedin.com/in/divya-soni14/"
                      githubURL="https://github.com/divya-soni-14"
                      email="divya.rajeshsoni@gmail.com"
                    />
                  </Grid>
                  <Grid>
                    <TeamMemberCard
                      imageURL={rithik}
                      name="Rithik Marudappa"
                      linkedinURL=""
                      githubURL="https://github.com/rumbleroii"
                      email="mrithik2010@gmail.com"
                    />
                  </Grid>
                  <Grid>
                    <TeamMemberCard
                      imageURL={manav}
                      name="Manav Bhadoria"
                      linkedinURL=""
                      githubURL="https://github.com/manavbhadoria"
                      email="manu.bhadoria@gmail.com"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

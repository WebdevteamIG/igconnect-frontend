import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button,Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxHeight: 2500,
  },
  media: {
    height: 200,
  },
});

export default function TeamMemberCard(props) {
  const classes = useStyles();
  if(props.linkedinURL.length>0 && props.githubURL.length>0){
    return (
      <Box m={2}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imageURL}
            title="Image"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
          <Grid item xs={12}>
                <Box p={1}> 
                  <Grid container spacing={1}>
                    <Grid item>
                      <Button size="small" style={{backgroundColor:"#0e76a8", textTransform:"none"}} variant="contained" color="primary" href={props.linkedinURL}>
                              LinkedIn
                      </Button>
                    </Grid>
                    <Grid item>
                       <Button size="small" variant="contained" style={{backgroundColor:"black", textTransform:"none"}} color="primary" href={props.githubURL}>
                              Github
                       </Button>
                    </Grid>
                    <Grid item>
                       <Button size="small" variant="contained" style={{backgroundColor:"yellow", textTransform:"none"}} color="black" href={props.email}>
                              Email
                       </Button>
                    </Grid>
                  </Grid>
                  </Box>
              </Grid>         
          </CardContent>
        </CardActionArea>
        
      </Card>
      </Box>
    );  
  }else if(props.githubURL.length>0 && props.linkedinURL.length<=1){
    return (
      <Box m={2}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imageURL}
            title="Image"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
          <Grid item xs={12}>
                <Box p={1}> 
                  <Grid container spacing={1}>
                  <Grid item>
                       <Button size="small" variant="contained" style={{backgroundColor:"black", textTransform:"none"}} color="primary" href={props.githubURL}>
                              Github
                       </Button>
                    </Grid>
                    <Grid item>
                       <Button size="small" variant="contained" style={{backgroundColor:"yellow", textTransform:"none"}} color="black" href="#myModal">
                              Email
                       </Button>
                    </Grid>
                  </Grid>
                  </Box>
              </Grid>         
          </CardContent>
        </CardActionArea>
        
      </Card>
      </Box>
    );
  }else if(props.githubURL.length<=1 && props.linkedinURL.length>0){
    return (
      <Box m={2}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imageURL}
            title="Image"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
          <Grid item xs={12}>
                <Box p={1}> 
                  <Grid container spacing={1}>
                  <Grid item >
                      <Button size="small" style={{backgroundColor:"#0e76a8", textTransform:"none"}} variant="contained" color="primary" href={props.linkedinURL}>
                              LinkedIn
                      </Button>
                    </Grid>
                    <Grid item >
                       <Button size="small" variant="contained" style={{backgroundColor:"yellow", textTransform:"none"}} color="black" href={props.email}>
                              Email
                       </Button>
                    </Grid>
                  </Grid>
                  </Box>
              </Grid>         
          </CardContent>
        </CardActionArea>
        
      </Card>
      </Box>
    );
  }
  return (
    <Box m={2}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageURL}
          title="Image"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
        <Grid item xs={12}>
              <Box p={1}> 
                <Grid container spacing={1}>
                  <Grid >
                     <Button size="small" variant="contained" style={{backgroundColor:"yellow", textTransform:"none"}} color="black" href={props.email}>
                            Email
                     </Button>
                  </Grid>
                </Grid>
                </Box>
            </Grid>         
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Box>
  );

  
}
// Libray imports
import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"

// Custom imports
import githubLogo from 'assets/img/github-logo.png'
import { useStyles } from "./makeCSS"

const ProfileCard = ({name, github, profileImage}) => {
    const classes = useStyles();

  return (
    <Grid item xs={3} className={classes.root}>
    <Card className={classes.card}>
      <CardContent>
        <img src={profileImage} className={classes.profileImage} alt=""/>
        <Typography variant="h5" component="h2" className={classes.title}>
          {name}
        </Typography>
        <a href={github}><img src={githubLogo} alt="" className={classes.githubLogo}/></a>
      </CardContent>
    </Card>
    </Grid>
  );
}

export default ProfileCard

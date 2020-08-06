// Library Imports
import React from "react"
import ProfileCard from 'components/ProfileCard/profileCard'
import Grid from '@material-ui/core/Grid';

// Custom Imports
import {useStyles} from "./makeCSS"

  

const Contributors = ({data}) => {

    const classes = useStyles();

    const displayProfiles = () => {

        return data.map((singleItem) => {
            return  (
                <ProfileCard 
                key={singleItem.id}
                name={singleItem.name}
                profileImage={singleItem.profileImage} 
                github={singleItem.github}/>
            )
        })
    }

    return(
      <>
        <center>
        <h3>OUR TOP CONTRIBUTORS</h3>
        </center>
        <Grid container className={classes.root} spacing={3}>
          {displayProfiles()}
        </Grid>
      </>
    )
}

export default Contributors

import React from 'react'
import Poster from 'components/Poster/poster'
import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton'
import SecondaryButton from 'components/Buttons/SecondaryButton/secondaryButton'
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import {useStyles} from "./makeCSS"

const Billboard = ({imageSrc}) => {

    const classes = useStyles()
    const history = useHistory();


    const handleFirstButton = () => {

        let path = `/home`; 
        history.push(path);

    }

    const handleSecondButton = () => {
    
        window.open("https://github.com/amanjaiswalofficial/infinity-reads-frontend", "_blank")        

    }

    return (
        <div style={{position: "relative"}}>
        <Poster imageSrc={imageSrc}/>
        <Grid className={classes.root}>
            <PrimaryButton handleClick={handleFirstButton} text="Go To Site"/>
            <SecondaryButton handleClick={handleSecondButton} text="Github"/>
        </Grid>
        </div>
    )
}

export default Billboard

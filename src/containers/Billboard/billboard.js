import React from 'react'
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import Poster from 'components/Poster/poster'
import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton'
import SecondaryButton from 'components/Buttons/SecondaryButton/secondaryButton'
import {useStyles} from "./makeCSS"
import { HOME_PATH } from 'utils/constants';

const Billboard = ({imageSrc}) => {

    const classes = useStyles()
    const history = useHistory();


    const handleFirstButton = () => {

        // update the URL with new params
        let path = HOME_PATH; 
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

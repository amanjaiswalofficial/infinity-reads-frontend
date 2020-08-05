// Library imports
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

// Custom imports
import { useStyles } from './makeCSS'
import {DEFAULT_APP_BAR_HEIGHT} from 'utils/constants'


const NavBar = ({overImage = false, imageHeight = null, scrollAmount = null}) => {

    const history = useHistory();
    const classes = useStyles();
    
    const getClass = () => {

        return overImage && scrollAmount < imageHeight - DEFAULT_APP_BAR_HEIGHT ? classes.navInvisible : classes.navVisible

    }

    const goHome = () => {
        let path = `/`; 
        history.push(path);
    }

    return (
        <div role="menu">
            <AppBar position="fixed" className={getClass()}>
                <Toolbar>
                    <a className={classes.link} onClick={goHome} href="">
                    <Typography variant="h6" className={classes.title} role="">
                        Infinity Reads
                    </Typography>
                    </a>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar

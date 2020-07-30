// Library imports
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Custom imports
import { useStyles } from './makeCSS'

const defaultAppBarHeight = 64

const NavBar = ({overImage = false, imageHeight = null, scrollAmount = null}) => {

    const classes = useStyles();
    const _getClass = () => {

        return overImage && scrollAmount < imageHeight - defaultAppBarHeight ? classes.navInvisible : classes.navVisible

    }

    return (
        <div role="menu">
            <AppBar position="fixed" className={_getClass()}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} role="">
                        Infinity Reads
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar

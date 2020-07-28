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
        <div data-testid="component-navbar">
            <AppBar data-testid="component-navbar-1" position="fixed" className={_getClass()}>
                <Toolbar data-testid="component-navbar-2">
                    <Typography variant="h6" className={classes.title}>
                        Infinity Reads
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar

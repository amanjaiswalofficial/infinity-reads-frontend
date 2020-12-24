// Library imports
import React, {useContext} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

// Custom imports
import { useStyles } from './makeCSS'
import { AppContext } from "context/appContext"

const NavBar = ({methods}) => {

    const { goHome, handleMenu, changeMode } = methods

    const [state] = useContext(AppContext);   

    const classes = useStyles();       

    return (
            <div role="menu">
                <AppBar position="fixed" className={classes.navVisible}>
                    <Toolbar>
                            <Typography variant="h6" className={classes.title} role="">
                                <button className={classes.link} onClick={goHome}>
                                    Infinity Reads
                                </button>
                            </Typography>
                            <Tooltip title="Dark Mode">
                            <FormControlLabel
                                    classes={{root: classes.switch}}
                                    control={
                                        <Switch 
                                            checked={state.mode} 
                                            onChange={changeMode}
                                        />}
                                />
                            </Tooltip>
                            {state.user.user_id}
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="primary"
                                >
                                <AccountCircleSharpIcon color="secondary" fontSize="large"/>
                                </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
    )
}

export default NavBar

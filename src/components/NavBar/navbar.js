// Library imports
import React, {useContext, useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';



// Custom imports
import { useStyles } from './makeCSS'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import {DEFAULT_APP_BAR_HEIGHT, SET_DARK_MODE} from 'utils/constants'
import { AppContext } from "context/appContext"


const NavBar = () => {

    const [state, dispatch] = useContext(AppContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mode, setMode] = useState(state.mode.dark);
    const open = Boolean(anchorEl);
    const history = useHistory();
    const classes = useStyles();

    // const handleModeChange = (event) => {
    //     setMode(event.target.checked)
    //     dispatch({
    //         type: SET_DARK_MODE,
    //         payload: {
    //           dark: event.target.checked
    //         }
    //       })
    //   };

    const getClass = () => {

        const {overImage, scrollAmount, imageHeight} = state.propsNavbar
        return overImage && scrollAmount < imageHeight - DEFAULT_APP_BAR_HEIGHT ? classes.navInvisible : classes.navVisible
    }        
      const handleMenu = (event) => {
        
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };


    const goHome = () => {
        let path = `/`; 
        history.push(path);
    }

    return (
            <div role="menu">
                <AppBar position="fixed" className={classes.navVisible}>
                    <Toolbar>
                            <Typography variant="h6" className={classes.title} role="">
                                <button className={classes.link} onClick={goHome}>
                                    Infinity Reads
                                </button>
                            </Typography>
                                {state.user.user_id}
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                                >
                                <AccountCircleSharpIcon color="secondary" fontSize="large"/>
                                </IconButton>
                                <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                                >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                    </Toolbar>
                </AppBar>
            </div>
    )
}

export default NavBar

/**
 * {/* <FormControlLabel
        control={
        <Switch
            checked={mode}
            onChange={handleModeChange}
            color="#51ff0d"
        />
        }
    /> }
 */
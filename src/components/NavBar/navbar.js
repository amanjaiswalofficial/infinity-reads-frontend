// Library imports
import React, {useContext, useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';



// Custom imports
import { useStyles } from './makeCSS'
import profileImage from 'assets/img/profile_icon.png'
import {DEFAULT_APP_BAR_HEIGHT} from 'utils/constants'
import { AppContext } from "context/appContext"


const NavBar = () => {

    const [state, dispatch] = useContext(AppContext);
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const history = useHistory();
    const classes = useStyles();

    const handleChange = (event) => {
        setAuth(event.target.checked);
      };

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
                <AppBar position="fixed" className={getClass()}>
                    <Toolbar>

                            <Typography variant="h6" className={classes.title} role="">
                                <a className={classes.link} onClick={goHome} href="">
                                    Infinity Reads
                                    </a>
                                </Typography>
                                {state.user.email}
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                                >
                                <img className={classes.profileImage} src={profileImage} alt=""/>
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

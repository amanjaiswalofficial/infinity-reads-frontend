// Library imports
import React, {useContext, useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

// Custom imports
import { useStyles } from './makeCSS'
import { CHANGE_MODE,
         LIGHT_MODE,
         DARK_MODE, 
         LANDING_PAGE_PATH } from 'utils/constants'
import { AppContext } from "context/appContext"
import NavBarMenu from "containers/NavBarMenu/navBarMenu"

const NavBar = () => {

    const [state, dispatch] = useContext(AppContext);    
    const [mode, setMode] = useState(false);
    const [formVisible, setFormVisible] = useState(false)
    
    const history = useHistory();
    const classes = useStyles();       
    
    const handleMenu = () => {
        setFormVisible(!formVisible)
      };


    // update the URL with new params
    const goHome = () => {
        let path = LANDING_PAGE_PATH; 
        history.push(path);
    }

    // update the theme mode from light to dark and viceversa
    const changeMode = () => {
        setMode(!mode)
        dispatch({
            type: CHANGE_MODE,
            payload: {
              mode: !mode ? DARK_MODE : LIGHT_MODE
            }
          })
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
                <NavBarMenu 
                drawerVisible={formVisible} 
                handleClose={handleMenu}/>
            </div>
    )
}

export default NavBar

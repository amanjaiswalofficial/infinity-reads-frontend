import React,{useState, useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom';

import NavBar from 'components/NavBar/navbar'
import { CHANGE_MODE,
         LIGHT_MODE,
         DARK_MODE,
         LANDING_PAGE_PATH,
         LOGIN_USER } from 'utils/constants'
import { AppContext } from "context/appContext"
import AnonymousMenu from "containers/AnonymousMenu/anonymousMenu"
import LoggedInMenu from 'containers/LoggedInMenu/loggedInMenu';
import {getToken} from "utils/helperFunctions"


const NavBarContainer = () => {

    const [menuVisible, setMenuVisible] = useState()
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [mode, setMode] = useState(false);
    const [state, dispatch] = useContext(AppContext);   

    const history = useHistory();

    useEffect(() => {
        if(state.user.token){
            setUserLoggedIn(true)
        }
        else{
            setUserLoggedIn(false)
        }
    }, [state.user.token])

    useEffect(() => {
        let token = getToken()
        if(token){
            dispatch({
                type: LOGIN_USER,
                payload: {
                  token: token
                }
            })
        }
    }, [dispatch])

    const handleMenu = () => {
        setMenuVisible(!menuVisible)
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

    let methods = {
        "handleMenu": handleMenu,
        "goHome": goHome,
        "changeMode": changeMode
    }

    const displayMenu = () => {
        return userLoggedIn ? 
            <LoggedInMenu handleClose={handleMenu}/> :
            <AnonymousMenu handleClose={handleMenu}/> 
    }

    return (
        <div>
            <NavBar methods={methods}/>
            {
                menuVisible ? displayMenu() : null
            }
        </div>
    )
}


export default NavBarContainer

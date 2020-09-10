// Library imports
import React, {useState, useEffect, useContext} from 'react'
import Fade from '@material-ui/core/Fade';

// Custom imports
import DrawerMenu from "components/DrawerMenu/drawerMenu"
import { AppContext } from "context/appContext"
import {LOGOUT_USER, DISPLAY_SNACK} from "utils/constants"
import config from "./config.json"
import {deleteToken} from "utils/helperFunctions"

const LoggedInMenu = ({handleClose}) => {

    const {menu} = config

    const [menuVisible, setMenuVisible] = useState(true)
    const [, dispatch] = useContext(AppContext);

    // if neither menu or dialog is visible, close the component
    useEffect(() => {
        if(!menuVisible){
            handleClose()
        }
    }, [menuVisible, handleClose])

    const logOutUser = () => {

        // remove token from state
        dispatch({
            type: LOGOUT_USER,
          })

        // remove token from localStorage
        deleteToken()
        setMenuVisible(false)

        // display successful message
        dispatch({
            type: DISPLAY_SNACK,
            payload: {
                message: "Logged Out Successfully"
            }
        })
    }

    // get variable to determine which menu option was selected
    const handleMenuSubmit = (variable) => {
        
        switch(variable){
            case "logOut":
                logOutUser()
                break
            case "myProfile":
                console.log("profile will load soon")
                break
            default:
                break
        }
    }

    const closeMenu = () => {
        setMenuVisible(false)
    }

    const getMenu = (visible, config) => (
        <Fade 
            in={visible} 
            timeoue={{ enter: 1000, exit: 1000}}>
                <DrawerMenu 
                config={config}
                handleClick={handleMenuSubmit}
                handleClose={closeMenu}
                />
        </Fade>
    )

    return (
        <div>
            { getMenu(menuVisible, menu) }
        </div>
    )
}

export default LoggedInMenu

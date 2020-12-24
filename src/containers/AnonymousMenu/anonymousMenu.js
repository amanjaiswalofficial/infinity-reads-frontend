// Library imports
import React, {useState, useEffect, useContext} from 'react'
import Fade from '@material-ui/core/Fade';

// Custom imports
import DrawerMenu from "components/DrawerMenu/drawerMenu"
import DialogContainer from "components/DialogContainer/dialogContainer"
import Form from "components/FormComponent/formComponent"
import MutationHandler from "containers/MutationHandler/mutationHandler"
import {USER_MUTATIONS} from "utils/queries"
import {LOGIN_USER} from "utils/constants"
import {saveToken, saveEmail} from "utils/helperFunctions"
import { AppContext } from "context/appContext"
import {formValidator} from "./formValidations"
import config from "./config.json"


const AnonymousMenu = ({handleClose}) => {

    const {menu, dialog} = config

    const [,dispatch] = useContext(AppContext);   

    const [menuVisible, setMenuVisible] = useState(true)
    const [dialogVisible, setDialogVisible] = useState(false)
    const [mutationVisible, setMutationVisible] = useState(false)

    const [form, setForm] = useState({
                                        statusActive: false,
                                        config: null,
                                        type: "",
                                        inputComponents: [],
                                        data: {},
                                        userInput: {}
                                    })

    // if neither menu or dialog is visible, close the component
    useEffect(() => {
        if(!menuVisible && !dialogVisible && !mutationVisible){
            handleClose()
        }
    }, [menuVisible, dialogVisible, mutationVisible, handleClose])

    // if a menu option is selected, enable the dialog to display form
    useEffect(() => {
        if(form.statusActive){
            setDialogVisible(true)
            closeMenu()
        }
    }, [form.statusActive])

    const closeDialog = () => {
        setDialogVisible(false)
    }

    const handleFormSubmit = (values) => {

        setForm({
            ...form,
            config: true,
            userInput: values
        })
        closeDialog()
        setMutationVisible(true)
    } 
    
    const handleCancel = () => {
        closeDialog()
    }

    // setup default values and methods for form components
    const getAdditionalConfig = (form) => {
        
        let values = {}
        let methods = {}

        let {inputComponents, userInput} = form

        inputComponents.forEach((component) => {
            if(component.key){
                values[component.key] = userInput[component.key] || ""    
            }
        })

        methods["button-submit"] = handleFormSubmit
        methods["button-cancel"] = handleCancel

        return {values, methods}

    }

    const updateTokenInState = (data) => {
        const {userData} = data
        if(userData){
            saveToken(userData.token)
            saveEmail(userData.user.email)
            dispatch({
                    type: LOGIN_USER,
                    payload: {
                        user_id: userData.user.email,
                        token: userData.token
                    }
            })
        }
    }

    const handleMutationSuccess = (data) => {
        setMutationVisible(false)
        if(data){
            switch(data.code){
                case 200:
                    updateTokenInState(data)
                    setDialogVisible(false)
                    break
                case 400:
                    setDialogVisible(true)
                    break
                default:
                    setDialogVisible(false)
                    break
            }
        }
    }

    // get variable to determine which menu option was selected
    const handleMenuSubmit = (variable) => {

        const {type, inputComponents} = dialog[variable]

        // set values for form
        setForm({
            ...form,
            statusActive: true,
            type: type,
            inputComponents: inputComponents
        })

    }

    const closeMenu = () => {
        setMenuVisible(false)
    }

    const getMutation = (visible, form) => {
        return (
                visible ?
                <MutationHandler 
                type={form.type}
                mutation={USER_MUTATIONS[form.type]}
                handleSuccess={handleMutationSuccess}
                values={form.userInput}
                mutationType={"message"}/>:
                null
        )
    }

    const getFormDialog = (visible) => {

        return visible ?
        <DialogContainer 
        visible={dialogVisible} 
        handleClose={closeDialog}>
            <Form 
            formConfig={form.inputComponents} 
            additionalConfig={getAdditionalConfig(form)}
            validator={formValidator}
            />
        </DialogContainer> :
        null

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
            { getFormDialog(dialogVisible) }
            { getMutation(mutationVisible, form) }
        </div>
    )
}

export default AnonymousMenu

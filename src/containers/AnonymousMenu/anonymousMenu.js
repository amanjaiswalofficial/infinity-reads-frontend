// Library imports
import React, {useState, useEffect} from 'react'
import Fade from '@material-ui/core/Fade';

// Custom imports
import DrawerMenu from "components/DrawerMenu/drawerMenu"
import DialogContainer from "components/DialogContainer/dialogContainer"
import Form from "components/FormComponent/formComponent"
import config from "./config.json"


const AnonymousMenu = ({handleClose}) => {

    const {menu, dialog} = config

    const [menuVisible, setMenuVisible] = useState(true)
    const [dialogVisible, setDialogVisible] = useState(false)

    const [formType, setFormType] = useState("")
    const [formConfig, setFormConfig] = useState([])

    // if neither menu or dialog is visible, close the component
    useEffect(() => {
        if(!menuVisible && !dialogVisible){
            handleClose()
        }
    }, [menuVisible, dialogVisible, handleClose])

    // if a menu option is selected, enable the dialog to display form
    useEffect(() => {
        if(formConfig.length){
            setDialogVisible(true)
        }
    }, [formConfig])

    // get variable to determine which menu option was selected
    const handleClick = (variable) => {
        setFormConfig(dialog[variable].values)
        setFormType(dialog[variable].type)
    }

    const closeMenu = () => {
        setMenuVisible(false)
    }

    const closeDialog = () => {
        setDialogVisible(false)
    }

    const handleSubmit = (values) => {
        console.log(values)
        closeDialog()
    } 
    
    const handleCancel = () => {
        closeDialog()
    }

    // setup default values and methods for form components
    const getAdditionalConfig = (config) => {
        
        let values = {}
        let methods = {}

        config.forEach((itemConfig) => {
            const { key } = itemConfig // get the key from formConfig items
            let itemId = `data-${key}` // generate unique ids, ex- data-title
            values[itemId] = ""  
        })

        methods["button-submit"] = handleSubmit
        methods["button-cancel"] = handleCancel

        return {values, methods}

    }

    const getDialog = (visible) => {

        return visible ?
        <DialogContainer 
        visible={dialogVisible} 
        handleClose={closeDialog}>
            <Form 
            formConfig={formConfig} 
            additionalConfig={getAdditionalConfig(formConfig)}
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
                handleClick={handleClick}
                handleClose={closeMenu}
                />
        </Fade>
    )

    return (
        <div>
            { getMenu(menuVisible, menu) }
            { getDialog(dialogVisible) }
        </div>
    )
}

export default AnonymousMenu

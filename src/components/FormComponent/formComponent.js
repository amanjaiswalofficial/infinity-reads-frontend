// Library imports
import React, {useContext, useState} from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from "@material-ui/core/Typography"

// Custom imports
import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton'
import SecondaryButton from "components/Buttons/SecondaryButton/secondaryButton"
import {useStyles} from "./makeCSS"
import {COLOR_MODE} from 'utils/constants'
import {AppContext} from 'context/appContext'


/**
 * formConfig: Config for the form to render
 * the form will return textboxes, textareas and buttons
 * The configuration and the order can be obtained from formConfig
 * 
 * additionalConfig: An object of values and methods
 * values refer to default values for the components
 * methods refer to method references to execute on button clicks
 * Note- the state variables used for input values are in format
 * data-{key} where key can be obtained from formConfig
 * Ex- data-title, data-content, data-tags etc
 * 
 * On clicking any button in the method, it automatically passes
 * the state values for different variables initialized on render
 */
//  This method accepts inputs as props
const FormComponent = ({formConfig, additionalConfig}) => {

    const {methods} = additionalConfig
    const [state] = useContext(AppContext)
  
    const colorMode = COLOR_MODE[state.theme.mode]
    const classes = useStyles(colorMode)()

    const [formValues, setFormValues] = useState(null)

    const updateValues = (e, key) => {

        // on change in value of any of the inputs, update value in state
        setFormValues(
            {
                ...formValues, 
                [`data-${key}`]: e.target.value
            })
    }

    const makeText = (item) => {
        return (
            <Box p={0.5}>
            <Typography 
            variant="h5" 
            component="h2" 
            className={classes.title} 
            >
               {item.label}
            </Typography>
          </Box>
        )
    }

    // return 2 buttons in center inside the box
    // onClick, executes method passed from props using unique id in config
    const makeTwoButtons = (item) => {
        const button1 = item.config.buttons[0]
        const button2 = item.config.buttons[1]

        if(button1 && button2 && methods[button1.id] && methods[button2.id]){
            return (
                <Box 
                p={0.5} 
                style={{justifyContent: "center", display: "flex"}}>
                    <PrimaryButton 
                    text={button1.text}
                    handleClick={e => methods[button1.id](formValues)}
                    />
                    <SecondaryButton 
                    textColor={"#F67280"} 
                    text={button2.text}
                    handleClick={e => methods[button2.id](formValues)} 
                    />
                </Box>
            )
        }

    }

    // Return a textField with text and label based on config
    const makeTextField = (itemConfig) => {
        return (
            <Box p={0.5} className={classes.childBox}>
                    <TextField id="outlined-basic"
                    fullWidth={true}
                    label={itemConfig.label}
                    variant="outlined" 
                    value={formValues[`data-${itemConfig.key}`]}
                    InputProps={{
                        classes: {
                        root: classes.root,
                        notchedOutline: classes.notchedOutline,
                        focused: classes.focused
                        }
                    }}
                    onChange={e => updateValues(e, itemConfig.key)}
                    />
            </Box>
        )
    }

    // Returns a textArea input based on config for text, labels etc
    const makeTextArea = (itemConfig) => {
        return (
            <Box p={0.5}>
                    <TextField
                            id="outlined-multiline-static"
                            label={itemConfig.label}
                            multiline
                            rows={4}
                            fullWidth={true}
                            variant="outlined"
                            value={formValues[`data-${itemConfig.key}`]}
                            InputProps={{
                              classes: {
                                root: classes.root,
                                notchedOutline: classes.notchedOutline,
                                focused: classes.focused
                              }
                            }}
                            onChange={e => updateValues(e, itemConfig.key)}
                            />
            </Box>
        )
    }

    // Based on number of buttons, return a component made up of buttons
    const makeButtons = (itemConfig) => {

        const finalButtons = []

        // identify the number of buttons passed in the config
        switch(itemConfig.config.buttons.length){
            case 2:
                const buttons = makeTwoButtons(itemConfig)
                finalButtons.push(buttons)
                break
            default:
                console.log(`Invalid config, unable to make component for ${itemConfig}`)
                break
        }

        return finalButtons
    }


    // on initial render, check for values if provided, and set it as default
    const setData = (config) => {

        const { values } = config
        if(!formValues){
            setFormValues(values)
        }

    }

    // Use the config provided, and return a form made up of different components
    const makeForm = (config) => {

        const finalForm = []

        config.forEach((singleItem) => {

            let component = null

            switch(singleItem.type){
                case "help-text":
                    component = makeText(singleItem)
                    break
                case "text-field":
                    component = makeTextField(singleItem)
                    break
                case "text-area":
                    component = makeTextArea(singleItem)
                    break
                case "button":
                    component = makeButtons(singleItem)
                    break
                default:
                    console.log(`Invalid config, unable to make component for ${singleItem}`)
                    break
            }
            
            finalForm.push(component)

        })
        return finalForm

    }

    return (
        <div>
            {
                setData(additionalConfig)
            }
            {
                formValues ? makeForm(formConfig) : null
            }
        </div>
    )
}

export default FormComponent

// Library imports
import React, {useContext} from 'react';
import Box from '@material-ui/core/Box'
import Typography from "@material-ui/core/Typography"

// Custom imports
import { AppContext } from "context/appContext"
import {useStyles} from "./makeCSS"
import {COLOR_MODE} from 'utils/constants'
import Form from 'components/FormComponent/formComponent'
import formConfig from './formConfig.json'
import DialogContainer from "components/DialogContainer/dialogContainer"


const BlogDialog = ({data={}, dialogVisible, handleClose, handleSubmit}) => {

  
  const [state] = useContext(AppContext)
  
  const colorMode = COLOR_MODE[state.theme.mode]
  const classes = useStyles(colorMode)()

  const {user_id} = state.user

  const handleCloseButton = () => {
    
    // close the dialog
    handleClose()
  }

  const handleOKButton = (formValues) => {

    const title = formValues["data-title"]
    const content = formValues["data-content"]
    const tags = formValues["data-tags"]

    // attempt to post the blog
    handleSubmit(data.id, title, content, user_id, tags)
  }

  // set default values for the rendered form
  // set method references to call for buttons
  const getAdditionalConfig = (formConfig, propsData) => {

    let values = {}
    let methods = {}

    formConfig.forEach((itemConfig) => {
      const { key } = itemConfig // get the key from formConfig items
      let itemId = `data-${key}` // generate unique ids, ex- data-title
      // if edit operation, then use value from props, otherwise empty string
      values[itemId] = propsData[key] || "" 
      
    })

    methods["button-cancel"] = handleCloseButton
    methods["button-ok"] = handleOKButton

    return {values, methods}

  }

  // Return a dialog box with textField for title and content
  // Also render the form with defined values and methods passed in props
  return (
    <div>
    {
        dialogVisible 
        ?
        <DialogContainer 
          visible={dialogVisible} 
          handleClose={handleClose}
        >
          <Box p={0.5}>
            <Typography 
            variant="h5" 
            component="h2" 
            className={classes.title} 
            data-testid="userName">
                INSERT BLOG HERE 
            </Typography>
          </Box>
          <Box p={0.5}>
              Posting as 
              <span 
              className={classes.userName}>
                {state.user.user_id}
              </span>
              <button className={classes.clickableButton}>Change</button>
          </Box>
          <Form 
          formConfig={formConfig} 
          additionalConfig={getAdditionalConfig(formConfig, data)}
          />
        </DialogContainer>
        :
        null
    }
    </div>
  );
}

export default BlogDialog

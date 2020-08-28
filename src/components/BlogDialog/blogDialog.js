// Library imports
import React, {useState, useEffect, useContext} from 'react';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField'
import Typography from "@material-ui/core/Typography"
import { MuiThemeProvider } from '@material-ui/core'

// Custom imports
import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton'
import SecondaryButton from "components/Buttons/SecondaryButton/secondaryButton"
import { AppContext } from "context/appContext"
import {useStyles, theme} from "./makeCSS"
import {COLOR_MODE} from 'utils/constants'


const BlogDialog = ({data={}, dialogVisible, handleClose, handleSubmit}) => {

  
  const [state] = useContext(AppContext)
  
  const colorMode = COLOR_MODE[state.theme.mode]
  const classes = useStyles(colorMode)()

  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [content, setContent] = useState("")
  
  const {user_id} = state.user
  

  // Change the value of title in the state
  useEffect(() => {
    if(data && data.title){
      setTitle(data.title)
    }
  }, [data])

  // Change the value of content in the state
  useEffect(() => {
    if(data && data.content){
      setContent(data.content)
    }
  }, [data])

  useEffect(() => {
    if(data && data.tags){
      setContent(data.tags)
    }
  }, [data])

  // Return a dialog box with textField for title and content
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={dialogVisible}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={dialogVisible}>
        <MuiThemeProvider theme={theme(colorMode)}>
          <div className={classes.paper}>
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
                <Box p={0.5} className={classes.childBox}>
                            <TextField id="outlined-basic"
                            fullWidth={true}
                            label="Title" variant="outlined" 
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                            InputProps={{
                              classes: {
                                root: classes.root,
                                notchedOutline: classes.notchedOutline,
                                focused: classes.focused
                              }
                            }}
                            />
                </Box>
                <Box p={0.5}>
                    <TextField
                            style={{}}
                            id="outlined-multiline-static"
                            label="Content"
                            multiline
                            rows={4}
                            fullWidth={true}
                            variant="outlined"
                            onChange={e => setContent(e.target.value)}
                            value={content}
                            InputProps={{
                              classes: {
                                root: classes.root,
                                notchedOutline: classes.notchedOutline,
                                focused: classes.focused
                              }
                            }}
                            />
                </Box>
                <Box p={0.5}>
                    <TextField
                            id="outlined-multiline-static"
                            label="Give A Tag"
                            multiline
                            fullWidth={true}
                            variant="outlined"
                            onChange={e => setTags(e.target.value)}
                            value={tags}
                            InputProps={{
                              classes: {
                                root: classes.root,
                                notchedOutline: classes.notchedOutline,
                                focused: classes.focused
                              }
                            }}
                            />
                </Box>
                <Box p={0.5} style={{justifyContent: "center", display: "flex"}}>
                    <PrimaryButton 
                    text={"Submit"}
                    handleClick={e => handleSubmit(data.id, title, content, user_id, tags)}
                    />
                    <SecondaryButton 
                    textColor={"#F67280"} 
                    text={"Cancel"} 
                    handleClick={handleClose}
                    />
                </Box>
          </div>
        </MuiThemeProvider>
        </Fade>
      </Modal>
    </div>
  );
}

export default BlogDialog

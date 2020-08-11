import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField'
import Typography from "@material-ui/core/Typography"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'


import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton'
import SecondaryButton from "components/Buttons/SecondaryButton/secondaryButton"
import { AppContext } from "context/appContext"

const theme = createMuiTheme({
    overrides: {
      MuiFormLabel: {
        root: {
            "&$focused": {
              color: "#355C7D",
            }
          }, 
      }
    }
  });


const useStyles = makeStyles((theme) => ({
  title: {
      color: "#355C7D",
      fontSize: 18
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 2),
    border: "1px solid #355C7D",
    width: "500px",
    minWidth: "500px",
    height: "340px",
    minHeight: "340px",
    boxShadow: "0 0 20px #355C7D"
  },
  userName: {
      color: "#c06c84"
  }
}));

const BlogDialog = ({data={}, dialogVisible, handleClose, handleSubmit}) => {

  const [state, dispatch] = useContext(AppContext)
  const classes = useStyles();
  const {user_id} = state.user
  const {_id} = state.editBlog
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    if(data && data.title){
      setTitle(data.title)
    }
  }, [data])

  useEffect(() => {
    if(data && data.content){
      setContent(data.content)
    }
  }, [data])

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
        <MuiThemeProvider theme={theme}>
          <div className={classes.paper}>
                <Box p={0.5}>
                    <Typography variant="h5" component="h2" className={classes.title} data-testid="userName">
                        INSERT BLOG HERE 
                    </Typography>
                </Box>
                <Box p={0.5}>
                    Posting as <span className={classes.userName}>{state.user.user_id}</span> <a href="#">Change</a>
                </Box>
                <Box p={0.5} className={classes.childBox}>
                            <TextField id="outlined-basic" 
                            style={{width: "100%"}}
                            label="Title" variant="outlined" 
                            onChange={e => setTitle(e.target.value)}
                            value={title}
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
                            />
                </Box>
                <Box p={0.5} style={{justifyContent: "center", display: "flex"}}>
                    <PrimaryButton 
                    text={"Submit"}
                    handleClick={e => handleSubmit(_id, title, content, user_id)}
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

// TODO: Set name as set in state by email id
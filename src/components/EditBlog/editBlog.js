import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField'
import Typography from "@material-ui/core/Typography"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'


import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton';
import SecondaryButton from "components/Buttons/SecondaryButton/secondaryButton"

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

const BlogDialog = ({dialogVisible, handleClose, handleSubmit, stateContent=null, stateTitle=null}) => {
  const classes = useStyles();
  const [author, setAuthor] = useState("Admin")
  const [title, setTitle] = useState(stateTitle)
  const [content, setContent] = useState(stateContent)

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
                        POST A NEW BLOG
                    </Typography>
                </Box>
                <Box p={0.5}>
                    Posting as <span className={classes.userName}>ABC</span> <a href="#">Change</a>
                </Box>
                <Box p={0.5} className={classes.childBox}>
                            <TextField id="outlined-basic" 
                            style={{width: "100%"}}
                            label="Title" variant="outlined" 
                            onChange={e => setTitle(e.target.value)}
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
                            />
                </Box>
                <Box p={0.5} style={{justifyContent: "center", display: "flex"}}>
                    <PrimaryButton 
                    text={"Submit"}
                    handleClick={e => handleSubmit(author, title, content)}
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
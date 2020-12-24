// Library Import
import React, {useContext} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Custom Import
import {useStyles} from './makeCSS'
import {AppContext} from 'context/appContext'
import {COLOR_MODE} from 'utils/constants'


const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MutationDialog = ({action, 
                         visibleState, 
                         data, 
                         loading, 
                         error, 
                         handleClose}) => {

  const [state] = useContext(AppContext)

  const colorMode = COLOR_MODE[state.theme.mode]
  const classes = useStyles(colorMode)()

  const displayData = () => {

    // Display loader while loading is true
    if(loading){
      return ( 
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={visibleState}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={visibleState}>
              <div className={classes.paper}>
                        <Loader 
                  type="TailSpin" 
                  color="#11325B" 
                  className={classes.loader} 
                  timeout={3000}
                  />
              </div>
            </Fade>
        </Modal>
        )
    }

    // Display snackbar when error occured with message
    if(error){
      return (
        <div className={classes.snackBar}>
          <Snackbar 
            open={visibleState} 
            autoHideDuration={5000} 
            onClose={handleClose}>
            <Alert 
            onClose={handleClose} 
            severity="error">
              {error.message}
            </Alert>
          </Snackbar>
        </div>
      );
    }

    if(data){
      const {code, message} = data[action]
      return (
      <div className={classes.snackBar}>
          <Snackbar 
          open={visibleState} 
          autoHideDuration={2000} 
          onClose={e => handleClose(data[action])}
          >
            <Alert 
            onClose={handleClose} 
            severity={code === 200 ? "success" : "error"}>
              {message}
            </Alert>
          </Snackbar>
      </div>
      )
    }

  }

  return (
        <div>
          {displayData()}
        </div>
      );
}

export default MutationDialog

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Box from '@material-ui/core/Box'

import SecondaryButton from "components/Buttons/SecondaryButton/secondaryButton"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 20px #355C7D",
    padding: theme.spacing(2, 2),
    border: "1px solid #355C7D"
  },
  root: {
    flexGrow: 1,
    marginTop: "65px",
    justifyContent: "center"
  },
  loader: {
      height: 80,
      width: 80
  }
}));


export default function MessageDialog({visibleState, data, loading, error, handleClose}) {
  const classes = useStyles();

  const handleData = () => {

    if(loading){
      return ( 
        <Loader 
        type="BallTriangle" 
        color="#11325B" 
        className={classes.loader} 
        timeout={3000}
        />
        )
    }

    if(error){
      return (<div className={classes.modal}>
        <Box p={0.5}>Some Error Occured</Box>
        <Box p={0.5}>
          <SecondaryButton 
                    textColor={"#F67280"} 
                    text={"OK"} 
                    handleClick={handleClose}
                    />
          </Box>
        </div>)
    }

    if(data){
      return (<div className={classes.modal}><Box p={0.5}>All Good Here</Box></div>)
    }

  }

  return (
        <div>
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
                    {handleData()}
              </div>
            </Fade>
          </Modal>
        </div>
      );
}

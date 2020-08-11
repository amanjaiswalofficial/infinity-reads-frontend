import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Box from '@material-ui/core/Box'

import SecondaryButton from "components/Buttons/SecondaryButton/secondaryButton"
import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton';

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


export default function MessageDialog({message, 
                                       visibleState, 
                                       handlePrimary, 
                                       handleSecondary}) {
  const classes = useStyles();

  const displayMessage = () => {

    return (
    <div className={classes.modal}>
        <Box p={0.5}>{message}</Box>
        <Box p={0.5}>
        <PrimaryButton text={"Yes"} handleClick={handlePrimary}/>
        <SecondaryButton 
                    textColor={"#F67280"} 
                    text={"Cancel"} 
                    handleClick={handleSecondary}
                    />
        </Box>
    </div>)

  }

  return (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={visibleState}
            onClose={handleSecondary}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={visibleState}>
              <div className={classes.paper}>
                    {displayMessage()}
              </div>
            </Fade>
          </Modal>
        </div>
      );
}

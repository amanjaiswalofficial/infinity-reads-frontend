// Library imports
import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'
import Box from '@material-ui/core/Box'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Custom imports
import SecondaryButton from "components/Buttons/SecondaryButton/secondaryButton"
import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton';
import {useStyles} from "./makeCSS"


export default function MessageDialog({message, 
                                       visibleState, 
                                       handlePrimary, 
                                       handleSecondary}) {
  const classes = useStyles();

  // return a message dialog with 2 buttons, each for a certain action handler  
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
                  <div className={classes.modal}>
                        <Box p={0.5}>
                          {message}
                        </Box>
                        <Box p={0.5}>
                            <PrimaryButton 
                            text={"Yes"} 
                            handleClick={handlePrimary}/>
                            <SecondaryButton 
                            textColor={"#F67280"} 
                            text={"Cancel"} 
                            handleClick={handleSecondary}
                            />
                        </Box>
                  </div>
              </div>
            </Fade>
          </Modal>
        </div>
      );
}

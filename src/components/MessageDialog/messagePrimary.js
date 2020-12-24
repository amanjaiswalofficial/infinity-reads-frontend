// Library imports
import React, {useContext} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'
import Box from '@material-ui/core/Box'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Custom imports
import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton';
import {useStyles} from "./makeCSS"
import {COLOR_MODE} from "utils/constants"
import {AppContext} from "context/appContext"


export default function MessageDialogPrimary({message, 
                                       visibleState, 
                                       handlePrimary}) {
  
  
  const [state] = useContext(AppContext)
  const colorMode = COLOR_MODE[state.theme.mode]
  const classes = useStyles(colorMode)()

  // return a message dialog with 2 buttons, each for a certain action handler  
  return (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={visibleState}
            onClose={handlePrimary}
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
                        </Box>
                  </div>
              </div>
            </Fade>
          </Modal>
        </div>
      );
}

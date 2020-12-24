// Library imports
import React, {useContext} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { MuiThemeProvider } from '@material-ui/core'

// Custom imports
import { AppContext } from "context/appContext"
import {useStyles, theme} from "./makeCSS"
import {COLOR_MODE} from 'utils/constants'

const DialogContainer = ({children, visible, handleClose}) => {

    const [state] = useContext(AppContext)
    
    const colorMode = COLOR_MODE[state.theme.mode]
    const classes = useStyles(colorMode)()


    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={visible}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
        <Fade in={visible}>
          <MuiThemeProvider theme={theme(colorMode)}>
            <div className={classes.paper}>
                {children}
            </div>
          </MuiThemeProvider>
        </Fade>
        </Modal>
    )
}

export default DialogContainer

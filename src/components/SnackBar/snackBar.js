// Library Import
import React, {useState, useContext, useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// Custom Import
import { AppContext } from "context/appContext"
import {useStyles} from './makeCSS'
import {HIDE_SNACK} from "utils/constants"


const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBar = ({type="success"}) => {

    const classes = useStyles()

    const [state, dispatch] = useContext(AppContext);   
    const [visibleState, setVisibleState] = useState(false)

    useEffect(() => {
        
        if(state.snackBar.visible){
            setVisibleState(true)
        }
        
    }, [state.snackBar.visible])

    const hideSnackBar = () => {
        dispatch({
            type: HIDE_SNACK,
            payload: {
                visible: false,
                message: null
            }
        })
        setVisibleState(false)
    }

    return (
        <div className={classes.snackBar}>
            <Snackbar 
            open={visibleState} 
            autoHideDuration={4000} 
            onClose={hideSnackBar}
            >
            <Alert 
            onClose={hideSnackBar} 
            severity={type}>
                {state.snackBar.message}
            </Alert>
            </Snackbar>
        </div>
        )
}

export default SnackBar

import { createMuiTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


export const theme = (mode) => {return createMuiTheme({
    overrides: {
      MuiFormLabel: {
        root: {
            color: mode.text,
            "&$focused": {
              color: mode.textSecondary
            }
          }, 
      }
      
    }
  });
}


export const useStyles = (mode) => {return makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    color: mode.text,
    backgroundColor: mode.body,
    padding: theme.spacing(2, 2),
    border: "1px solid #355C7D",
    width: "500px",
    minWidth: "500px",
    boxShadow: "0 0 20px #355C7D"
  }
}));
}

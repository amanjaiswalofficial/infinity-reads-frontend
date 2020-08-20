import { createMuiTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


export const theme = createMuiTheme({
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


export const useStyles = makeStyles((theme) => ({
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
    height: "390px",
    minHeight: "390px",
    boxShadow: "0 0 20px #355C7D"
  },
  userName: {
      paddingLeft: "5px",
      color: "#c06c84"
  },
  clickableButton: {
    background: "None", 
    border: "None"
  }
}));

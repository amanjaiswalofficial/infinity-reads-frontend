import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = (mode) =>{
  return createMuiTheme({
    palette: {
      secondary: {
        main: mode.colorSecondary
      }
    }
  });
}

export const useStyles = (mode) => {return makeStyles((theme) => ({
    parent: {
      width: "98%",
      marginTop: "10px",
      justifyContent: "center",
      position: "sticky",
      top: 0,
    },
    title: {
      fontSize: "20px",
      paddingTop: "9%",
      paddingBottom: "1%",
      paddingLeft: "6%",
      fontWeight: "lighter",
      color: mode.textSecondary
    },
    submitButton: {  
      paddingLeft: "4%",
      '& > * + *': {
        height: "100%",
        width: "100%"
      },
    },
    loader: {
      marginLeft: 10,
      marginTop: 100
    }
  }));
}

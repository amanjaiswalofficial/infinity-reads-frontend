import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#355C7D'
    }
  }
});

export const useStyles = makeStyles((theme) => ({
    parent: {
      width: "98%",
      marginTop: "10px",
      justifyContent: "center",
      position: "sticky",
      top: 0
    },
    title: {
      fontSize: "20px",
      paddingTop: "9%",
      paddingBottom: "1%",
      paddingLeft: "6%",
      fontWeight: "lighter"
    },
    submitButton: {  
      paddingLeft: "4%",
      '& > * + *': {
        height: "100%",
        width: "100%"
      },
    },
    singleChoice: {
      border: "1px solid #FFFFFF",
      "&:hover": {
        borderRadius: "3px",
        background: "none",
        border: "1px solid #355C7D"
      }
    },singleChoiceText: {
      "&:hover": {
        color: "#355C7D"
      }
  },
    root: {
      marginLeft: "1%",
      maxWidth: 360,
      height: "auto",
      width: "70%",
      maxHeight: "230px",
      overflowX: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
  }));

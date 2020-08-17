import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    parent: {
        justifyContent: "center", 
        marginTop: "70px",
        display:"flex"
    },
    root: {
      alignItems: "center",
      width: "50.7%"
    },
    boxTextField: {
      width: "64%"
    },
    boxButton: {
      height: "60px",
      width: "17%",
      display: "flex",
      alignItems: "center",
      marginLeft: "5px",
      '& > *': {
        width: "100%",
        height: '80%',
      }
    },
    boxSelection: {
      width: "18%"
    },
    formControl: {      
      width: "94%",
      margin: theme.spacing(1),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    selectBox: {
      width: "100%"
    }
  }));
  // '& > *': {
  //   width: '100%',
  // }

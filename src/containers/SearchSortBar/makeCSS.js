import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    parent: {
      display: "flex",
      marginTop: "10px",
      justifyContent: "center",
      alignItems: "center",
    },
    root: {
      width: "98%",
    },
    boxButton: {
      paddingLeft: "2px",
      verticalAlign: "center",
      width: "98%",
      alignContent: "center",
      alignItems: "center",
      '& > *': {
        width: '100%',
        height: "100%",
      }
    }
  }));
  // '& > *': {
  //   width: '100%',
  // }

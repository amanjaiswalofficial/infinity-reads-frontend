import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    boxSelection: {
      width: "18%"
    },
    formControl: {      
      width: "96%",
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

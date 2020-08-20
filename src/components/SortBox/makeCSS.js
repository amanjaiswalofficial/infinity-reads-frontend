import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (mode) => {return makeStyles((theme) => ({
    parent: {      
      width: "98%",
      marginLeft: "1%",
      marginRight: "1%",
    },
    selectBox: {
      color: mode.text,
      background: mode.bgMain,
    }
  }));
}
  // '& > *': {
  //   width: '100%',
  // }

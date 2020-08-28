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
      '&:before': {
        borderColor: mode.textBoxBorderOnFocus,
    },
    '&:after': {
        borderColor: mode.textBoxBorderOnFocus,
    }
    },
    notchedOutline: {},
      focused: {
        '&$focused $notchedOutline': {
          border: mode.textBoxBorderOnFocus
      },
        "&$focused": {
          color: mode.textSecondary
        }
      },
      root: {
        background: mode.bgMain,
        color: mode.text
    }
  }));
}
  // '& > *': {
  //   width: '100%',
  // }

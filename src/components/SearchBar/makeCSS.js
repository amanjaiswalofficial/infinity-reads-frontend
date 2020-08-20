import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (mode) => {
    return makeStyles((theme) => ({

    parent: {
        border: mode.searchBorder
    },
    textField: {
        padding: "0px",
        width: "98%",
        marginRight: "1%",
        background: mode.bgMain,
        color: mode.text,
      },
      notchedOutline: {},
        focused: {
        "& $notchedOutline": {
            borderColor: "yellow"
        }
        }
  }));
}
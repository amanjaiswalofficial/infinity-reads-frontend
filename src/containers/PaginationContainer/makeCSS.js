import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (mode) => {return makeStyles((theme) => ({
    parent: {
        marginTop: 20, 
        marginBottom: 20
    },
    root: {
        background: mode.bgMain,
        color: "#000000",
        border: mode.borderMain,
        borderRadius: mode.pagBorderRadius
    }
  }));
}

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "65px",
      width: "100%"
    },
    parentContainer: {
      flexGrow: 1,
    },
    blogContainer: {
      flexGrow: 1,
      justifyContent: "center"
    },
    loader: {
        height: 80,
        width: 80,
        marginTop: "15%"
    }
  }));

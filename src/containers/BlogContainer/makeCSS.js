import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "65px",
      justifyContent: "center"
    },
    loader: {
        height: 80,
        width: 80,
        marginTop: "15%"
    }
  }));

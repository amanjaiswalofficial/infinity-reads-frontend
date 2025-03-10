import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0 0 20px #355C7D",
      padding: theme.spacing(2, 2),
      border: "1px solid #355C7D"
    },
    root: {
      flexGrow: 1,
      marginTop: "65px",
      justifyContent: "center"
    },
    loader: {
        height: 80,
        width: 80
    }
  }));

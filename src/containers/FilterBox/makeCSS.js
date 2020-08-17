import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      height: "auto",
      maxHeight: "210px",
      overflowX: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
  }));
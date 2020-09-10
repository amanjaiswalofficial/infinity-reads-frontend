import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    snackBar: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  })
);

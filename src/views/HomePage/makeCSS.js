import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (mode) => { 
    return makeStyles((theme) => ({
        body: {
            background: mode.body
        },
        root: {
            marginTop: "65px"
        }
  }));
}

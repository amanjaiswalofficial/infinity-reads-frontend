import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    parent: {
      flexGrow: 1,
      display: "flex",
      marginTop: "10px",
      flexDirection: "column", 
      justifyContent: "center",
      alignItems: "center",
    },
    blogContainer: {
      width: "98%",
    },
    loader: {
        paddingTop: "15%",
        paddingLeft: "42%",
        paddingRight: "43%"
    },
    pagination: {
      marginTop: 10,
      
    }
}));

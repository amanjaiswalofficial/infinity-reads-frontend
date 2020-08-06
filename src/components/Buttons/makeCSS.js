import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    primary: {
        background: "#F67280", 
        color: "#FFFFFF", 
        marginLeft: "2px", 
        marginRight: "2px",
        "&:hover": {
            background: "#ff3b66",
            boxShadow: "1 1 2px #ff3b44"
        }
      },

    secondary: {
        border: "1px solid #F67280", 
        color: "#FFFFFF", 
        marginLeft: "2px", 
        marginRight: "2px",
        "&:hover": {
            color: "#F67280",
            boxShadow: "1 1 2px #ff3b44"
        }
    }

}))

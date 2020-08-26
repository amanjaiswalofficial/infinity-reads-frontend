import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 150,
        padding: theme.spacing(2),        
        textAlign: 'center',
        alignItems: 'center',
        color: theme.palette.text.primary,
      },
      githubLogo: {
        borderRadius: "50%",
        height: 30,
        width: 30,
        "&:hover": {
          transform: "scale(1.4)",
          transition: "transform .4s"
        }
      },
      title: {
        fontSize: 24,
      },
      profileImage: {
        minHeight: 100,
        minWidth: 100,
        height: 200, 
        width: 200, 
        borderRadius: "50%", 
        marginBottom: 10, 
        marginTop: 10,
      },
      pos: {
        marginBottom: 12,
      },
      card: {
        color: "white",
        background: "#11325b"
      }
 }));

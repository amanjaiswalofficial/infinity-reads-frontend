import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    title: {
      fontFamily: 'Roboto sans-serif',
      width: "95%"
    },
    profileImage: {
      height: "35px",
      width: "35px",
      borderRadius: "50%",
      objectFit: "cover"
    },
    link: {
      color: "#FFFFFF",
      "&:hover": {
        color: "#F8B195",
        textDecoration: "None"
      },
      background: "None", 
      border: "None"
    },
    navVisible: {
      background: "#355C7D",
      animationDuration: "0.5s",
      animationName: "$setVisibility",
    },
    navInvisible: {
      background: "transparent",
      animationDuration: "0.5s",
      animationName: "$resetVisibility"
    },
  
    "@keyframes resetVisibility": {
      "from": {
          background: "#355C7D"
      },
      "to": {
          background: "transparent",
      }
    },
  
    "@keyframes setVisibility": {
      "from": {
          background: "transparent"
      },
      "to": {
          background: "#355C7D",
      }
    }
  }));
  
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    title: {
      fontFamily: 'Roboto sans-serif',
      flexGrow: 1,
    },
  
    navVisible: {
      background: "#6C5B7B",
      animationDuration: "0.5s",
      animationName: "$setVisibility"
    },
    navInvisible: {
      background: "transparent",
      animationDuration: "0.5s",
      animationName: "$resetVisibility"
    },
  
    "@keyframes resetVisibility": {
      "from": {
          background: "#6C5B7B"
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
          background: "#6C5B7B",
      }
    }
  }));
  
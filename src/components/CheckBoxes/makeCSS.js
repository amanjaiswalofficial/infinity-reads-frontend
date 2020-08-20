import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (mode) => {return makeStyles((theme) => ({

    singleChoice: {
        background: mode.bgMain,
        color: mode.text, 
        "&:hover": {
          borderRadius: "3px",
          background: mode.bgMain,
          border: mode.choiceBorderHover
        }
      },singleChoiceText: {
        "&:hover": {
          color: mode.choiceTextHover
        }
    },
      root: {
        marginLeft: "1%",
        maxWidth: 360,
        height: "auto",
        width: "70%",
        maxHeight: "230px",
        overflowX: "hidden",
      }

    }))
}
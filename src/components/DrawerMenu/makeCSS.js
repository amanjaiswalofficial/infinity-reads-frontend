import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (mode) => {return makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    listParent: {
      background: mode.body,
    },
    listItem: {
      background: mode.body,
      "&:hover": {
        background: mode.menuItemHover,
        color: mode.menuTextHover,
        border: mode.menuItemBorder,
        '& > *': {
          color: mode.textSecondary,
        }
      }
    },
    listItemText: {
      color: mode.text
    },
  });
}

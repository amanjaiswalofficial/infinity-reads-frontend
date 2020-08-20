import React, {useContext} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import {AppContext} from 'context/appContext'
import { COLOR_MODE } from 'utils/constants';
import { useStyles } from './makeCSS'

const CheckBoxes = ({values, getCheckedStatus, handleToggle}) => {

    const [state] = useContext(AppContext);

    // Change mode based on state
    const colorMode = COLOR_MODE[state.theme.mode]
    const classes = useStyles(colorMode)();

    return (
        <div className={classes.root}>
            <List>
              {
                values.map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                return (
                  <ListItem 
                  key={value} 
                  role={undefined} 
                  dense 
                  button
                  className={classes.singleChoice}
                  onClick={handleToggle(value)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={getCheckedStatus(value)}
                        tabIndex={-1}
                      />
                    </ListItemIcon>
                    <ListItemText
                    className={classes.singleChoiceText} 
                    id={labelId} 
                    primary={`${value}`} />
                  </ListItem>
                );
              })}
            </List>
          </div>
    )
}

export default CheckBoxes

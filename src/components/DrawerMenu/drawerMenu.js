// Library imports
import React, {useState, useEffect, useContext} from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import FaceIcon from '@material-ui/icons/Face';

// Custom imports
import {useStyles} from './makeCSS'
import {AppContext} from "context/appContext"
import {COLOR_MODE} from "utils/constants"

const DrawerMenu = ({config, handleClick, handleClose}) => {

  const [state] = useContext(AppContext)
    
  const colorMode = COLOR_MODE[state.theme.mode]
  const classes = useStyles(colorMode)()

  const [visible, setVisible] = useState(true)

  // On closing the drawer, also close the parent Menu after a span of 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      if(!visible){
        handleClose()
      }
    }, 500);
    return () => clearInterval(interval);
  }, [visible, handleClose])

  // Close the drawer
  const closeDrawer = () => {
    setVisible(false)
  }

  // Call the parent handleClick and close the drawer
  const handleDrawerAction = (key) => {
    handleClick(key)
    setVisible(false)
  }

  const getIcon = (iconName) => {
    switch(iconName){
      case "newIcon":
        return <NewReleasesIcon color="secondary"/>
      case "faceIcon":
        return <FaceIcon color="secondary"/>
      default:
        break
    }
  }

  // Based on config return a drawer list of items
  const listMenu = () => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: true,
          })}
          role="presentation"
        >
          <List classes={{root: classes.listParent}}>
            {config.map(({text, icon, key}) => (
              <ListItem 
              classes={{root: classes.listItem}}
              button 
              key={text} 
              onClick={e => handleDrawerAction(key)}>
                <ListItemIcon>
                  {
                    getIcon(icon)
                  }
                </ListItemIcon>
                <ListItemText primary={text} classes={{root: classes.listItemText}} />
              </ListItem>
            ))}
          </List>
        </div>
  );

  return (
      <div>
        <Drawer
        anchor={"top"} 
        open={visible} 
        onClose={closeDrawer}>
          {listMenu()}
        </Drawer>
      </div>
  );
}

export default DrawerMenu

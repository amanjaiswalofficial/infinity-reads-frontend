// Library imports
import React from 'react';

// Custom imports
import AnonymousMenu from "containers/AnonymousMenu/anonymousMenu"

const NavBarMenu = ({userLoggedIn=false, drawerVisible, handleClose}) => {

  const getMenu = (userLoggedIn) => {
    return !userLoggedIn ? 
    <AnonymousMenu handleClose={handleClose}/> : 
    null
  }

  return (
    <div>
        {
          drawerVisible ? getMenu(userLoggedIn) : null
        }
    </div>
  );
}

export default NavBarMenu

// library imports
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core'


// CSS Imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Imports
import HomePage from 'views/HomePage'
import LandingPage from 'views/LandingPage'
import ProfilePage from 'views/ProfilePage'
import NavBar from 'components/NavBar/navbar';
import {theme} from 'utils/helperFunctions'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <BrowserRouter>
    <NavBar/>
    <Switch>
        <Route path='/home' component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
        <Route exact path='/' component={LandingPage} />
    </Switch>
   </BrowserRouter>
   </MuiThemeProvider>
  );
}
export default App;

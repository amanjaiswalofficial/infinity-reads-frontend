// library imports
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// CSS Imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Imports
import HomePage from 'containers/HomePage'
import LandingPage from 'containers/LandingPage'
import ProfilePage from 'containers/ProfilePage'

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path='/home' component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
        <Route exact path='/' component={LandingPage} />
    </Switch>
   </BrowserRouter>
  );
}
export default App;

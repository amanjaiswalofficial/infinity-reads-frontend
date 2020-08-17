// library imports
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// CSS Imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Imports
import HomePage from 'views/HomePage'
import LandingPage from 'views/LandingPage'
import ProfilePage from 'views/ProfilePage'
import NavBar from 'components/NavBar/navbar';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>

        <Route path='/home' component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
        <Route exact path='/' component={LandingPage} />
    </Switch>
   </BrowserRouter>
  );
}
export default App;

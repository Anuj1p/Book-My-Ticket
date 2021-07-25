import React from 'react' ;
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom' ;
import Login from './authentication/Login'
import SignUp from './authentication/Sign-Up'
import Home from './Home'

import './App.css';


const App = () => {
        return (
              <React.Fragment>
              <Router>
              
              <Switch>
                  <Route path="/auth/login" exact={true}>
                          <Login />
                  </Route>
                  <Route path="/auth/signup" exact={true}>
                          <SignUp />
                  </Route>
                  <Route path="/" exact={true}>
                  <Home/>
                  </Route>
                  <Redirect  to="/" />
              </Switch>  
              </Router>   
              </React.Fragment>
              );

};

export default App;
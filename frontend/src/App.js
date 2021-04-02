import React from 'react' ;
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom' ;
import Login from './authentication/Login'
import SignUp from './authentication/Sign-Up'
import AppBar from './Pages/AppBar' ;

import './App.css';


const App = () => {
        return (
                <Router>
                  <AppBar />
                    <main>
                        <Route path="/auth/login" exact={true}>
                                <Login />
                        </Route>
                        <Route path="/auth/signup" exact={true}>
                                <SignUp />
                        </Route>
                        <Redirect  to="/" />
                    </main>     
                </Router>
              );

};

export default App;
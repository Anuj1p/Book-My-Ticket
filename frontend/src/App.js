import React from 'react' ;
import './App.css';
import Login from './authentication/Login' ;
import Sign_Up from  './authentication/Sign-Up';
import User_Profile from './Portal/User/User-Profile'
import Admin_Profile from './Portal/Admin/Admin-Profile'

function App() {
  return (
      <React.Fragment>
        <User_Profile/>
      </React.Fragment>
  );
}

export default App;
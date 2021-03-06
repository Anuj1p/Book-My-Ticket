// Dependencies Installed
// npm install react-router-dom
// npm install react-icons
// npm install --save styled-components
 
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar_UserProfile from './Navbar/Navbar_UserProfile'
import {NavBtnLink} from './Navbar/Navbarcp'
import ImageAvatars from './Avatar'
import './User-Profile.css'



const User_Profile = props => {
    return (
        <div>
          <Router>
            <Navbar_UserProfile/>
            </Router>  
        <div className="row align-items-start">
        <div className="col">
            <ImageAvatars/>
        </div>
        <div className="col">
        <div>
                <div>
                    <label>Full Name:</label>
                </div> 
                <div>
                    <input type="name"></input>
                </div>
                <br/>
                <div>
                    <Router><NavBtnLink to="/">Update</NavBtnLink></Router>
                </div>
                        
                <br/>
                <div>
                    <label>Email:</label>
                </div>
                <div>
                    <input type="email"></input>
                </div>
                </div>
                <br/>
                <div>
                <div>
                    <label>Password:</label>
                </div>
                <div>
                    <input type="password"></input>
                </div>
                <br/>
                <div>
                    <Router><NavBtnLink to="/">Update</NavBtnLink></Router>
                </div>
                </div>
            </div>
    </div>
  </div>
            
    )
}

export default User_Profile


            
            
            
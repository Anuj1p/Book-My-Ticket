import React from 'react';
import {Nav , NavBtnLink , NavLink , NavMenu , Bars , NavBtn} from '../components/Navbar/Navbarcp';
// import {BrowserRouter as Router, Route} from 'react-router-dom' ;
import Logo from '../components/Navbar/Logo.jpg' ;


const AppBar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <img src={Logo} alt="Logo" width="" height="75px" />
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Now Showing</NavLink>
                <NavLink to="/">Coming Soon</NavLink>            
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/auth/signup">SIGN UP</NavBtnLink>
                <NavBtnLink to="/auth/login">LOG IN</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
}

export default AppBar;

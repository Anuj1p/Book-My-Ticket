import React from 'react';
import Input from './Input' ;
import './Login.css';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
//import '/home/sharma/Desktop/movie_booking-master/movie_booking/frontend/node_modules/bootstrap/dist/css/bootstrap.min.css';

const Login = props => {
    return (
        <div className="main-container">
            <div className="base-container">
                <div className="header-login">SIGN IN</div>
                <div className="vpn">
                    <center><PermIdentityIcon style={{verticalAlign: "center", fontSize: 95}}/></center>
                </div>
                <div className="content">
                    <div>
                        <form>
                            <label for="name">Username</label>
                            <Input type="text" id="name" Placeholder="Enter your full name"/>
                            <label for="password">Password</label>
                            <Input type="password" id="password" Placeholder="Be creative with the caption"/>
                            <input type="submit" value="Log In"/>
                        </form>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    ) ;

}



export default Login ;
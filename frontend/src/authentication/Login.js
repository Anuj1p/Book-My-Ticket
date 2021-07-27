import React from 'react';
import Input from './Input' ;
import './Login.css';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Bar from './Bar'

const Login = props => {
    return (
        <div>
        <Bar/>
        <div className="main-container">
            <div className="base-container">
                <div className="header-login"><h1>SIGN IN</h1></div>
                {/* <div className="vpn">
                    <center><PermIdentityIcon style={{verticalAlign: "center", fontSize: 95}}/></center>
                </div> */}
                <div className="content">
                    <form>
                        <label for="name">Email</label>
                        <Input style={{padding:"15"}}type="text" id="name" placeholder="Enter Your Email Here"/>
                        
                        <label for="password">Password</label>
                        <Input type="password" id="password" placeholder="Enter Your Password Here"/>
                        
                        <input type="submit" value="Log In"/>
                    </form>
                </div>
            </div>
        </div>
        </div>
    ) ;

}



export default Login ;
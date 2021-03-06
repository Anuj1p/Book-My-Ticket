import React,{useState} from 'react';
import Bar from './Bar'
import './Sign-Up.css';
import validator from 'validator'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import VisibilityIcon from '@material-ui/icons/Visibility';
const eye = <VisibilityIcon/>;



const Sign_Up = () =>{
    const [enteredemail,setenteredemail] = useState('');                                       //state for email
    const [enteredName,setenteredName] = useState('');                                        //state for Full Name
    const [enteredpassword,setenteredpassword] = useState('');                               // state for password
    const [enteredconfirmpassword,setenteredconfirmpassword] = useState('');                // state for confirm password
    const [passwordShown, setPasswordShown] = useState('');                                // state for hide/show password
    const [cpasswordShown, setcPasswordShown] = useState('');                             // state for hide/show confirmpassword
    const [emailError, setEmailError] = useState('');                                    // state for email validation
    const [pswdError, setpswdError] = useState(false);                                  // sate for password validation
    const [passwordError, setpasswordError] = useState('');                            // sate for password = confirm password

    
  
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    const togglecPasswordVisiblity = () => {
        setcPasswordShown(cpasswordShown ? false : true);
    };
    
      const AddUserHandler = event =>{
        event.preventDefault();
          const newuser = {
                  id : Math.random.toString(),
                  name     : enteredName,
                  email    : enteredemail,
                  password : enteredpassword };
         
          setenteredpassword('');
          setenteredemail('');
          setenteredconfirmpassword('');
  
     };
    
     
   
  
    const emailChange = event =>{
         setenteredemail(event.target.value);
         
            var email = event.target.value;  
                   if (!validator.isEmail(email)) { 
                    setEmailError('Enter a Valid Email')
                   }
                   else {
                    setEmailError('')
                   }
                };
    const NameChange = event =>{
         setenteredName(event.target.value);
                };
  
    const passwordChange = event =>{
      setenteredpassword(event.target.value);
      if(event.target.value.length < 8)
      {
          setpswdError("Password should atleast be 8 characters long");
      }
      else{
            setpswdError(" ");
      }
         
    }


    const confirmpasswordChange = event =>{
      setenteredconfirmpassword(event.target.value);  
    if(enteredpassword == event.target.value){ 
        setpasswordError('');
       } 
    else {
        setpasswordError('Password does\'t match');
    }     
    }

return( 
    <div>
    <Bar/>
    <div class = "main-container">
     
      <div className="base-container">
        <div className="header-login"><h1>SIGN UP</h1></div>
        {/* <div className="vpn">
          <center><PermIdentityIcon style={{verticalAlign: "center", fontSize: 95}}/></center>
        </div> */}
        <div className="content">
        <form>
           
            <label for="name">Full Name</label>
            <input type="text" id="name" value = {enteredName} onChange = {NameChange} placeholder="Enter Your Full Name Here" />
          

           
            <label for="email">Email</label>
            <input type="text" id="email" value = {enteredemail} onChange = {emailChange} placeholder="Enter Your Email Here"/>
          

          
            <span>{emailError}</span>
          
     
          
            <label for="password">Password</label>&nbsp;
            <input id="password" type={passwordShown ? "text" : "password"} value = {enteredpassword} onChange = {passwordChange} placeholder="Enter Your Password Here"/>
            <i onClick={togglePasswordVisiblity} class="i1">{eye}</i>
          

          
            <span>{pswdError}</span> 
          

          
            <label for="confirm">Confirm Password</label>&nbsp;&nbsp;
            <input id="confirm" type={cpasswordShown ? "text" : "password"} value = {enteredconfirmpassword}  onChange = {confirmpasswordChange} placeholder="Re-enter Your Password Here"/>
            <i onClick={togglecPasswordVisiblity} class="i2">{eye}</i>
          

          <div>
            <span>{passwordError}</span> 
          </div>

          <input type="submit" value = "Sign-Up"/>

        </form>
        </div>
      </div>
    </div>
    </div>
);
};

export default Sign_Up;
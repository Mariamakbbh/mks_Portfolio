import React, { useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PasswordChecklist from "react-password-checklist"

export const SignupModel = (props) => {

    //1. regex to validate 
    const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    //2. create changing states 

    //2.1 keep the state of the 
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("")
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [showChecklist, setShowChecklist] = useState(false);

    const refresh = () => {
      setEmail("");
      setEmailError("");
      setPassword("");
      setIsPasswordValid(false);
      setShowChecklist(false);
      document.body.classList.add("no-scroll");
      props.handleClick();
    }

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setEmailError("");
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const isValid = (e) => {
      setIsPasswordValid((prevIsValid) => !prevIsValid);
    };

    const handlePasswordClick = () => {
      setShowChecklist(true);
    };

    //4. Handle Submit 
    const validateAndSubmitForm = async (event) => {
      event.preventDefault();

    // email validation
    if (!email) {
      setEmailError("Email is required");
      return
    } else if (!isEmail(email)) {
      setEmailError("Invalid email format");
      return
    }

    if(!showChecklist){
      handlePasswordClick();
      return
    }
    // password not validation
    if (isPasswordValid) {
      return
    }
    
    //console.log("all approve! -> Email: ", email, " Password: ", password)
    console.log("all approve!")
  
    try {
          let res = await fetch("http://localhost:3080/user_API/AddUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
          },
            body: JSON.stringify({
              email: email,
              password: password
            }),
          });
          // let resJson = await res.json();
          if (res.statusText === "Created") {
            console.log("Authorised User");
          } else {
            console.log("Invalid User Request: " + res.status + "\b" + res.statusText);
          }
        } catch (err) {
          console.log(err);
        }

    };

  return (
    <div>
    <Dialog open={props.open} onClose={refresh} >
      <DialogTitle 
      sx={{backgroundColor: 'rgb(255, 0, 136)', color:'white'}} 
      display="flex" 
      alignItems="center" 
      justifyContent = "center">
        Sign Up
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{mt:3, mb:1, color:'grey', fontSize:15}}>
          Create a new account here.                                
        </DialogContentText>
        <TextField
         autoFocus
          margin="dense"
          id="eml"
          label="Email Address"
          type="email"
          /*The value prop sets the value of the input field. In this case, it is set to the email property of a values object. 
          This means that the value of the input field is controlled by the state of the parent component.*/
          value={email}
          onChange={handleEmailChange}
          fullWidth
          variant="standard"
        />
        {emailError && <div className="error">{emailError}</div>}  

        <TextField
          margin="dense"
          id="pwd"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onClick={handlePasswordClick}
          fullWidth
          variant="standard"
          sx={{mt:3}}
        />
        {showChecklist &&<PasswordChecklist
        style={{fontSize:14, paddingTop:10}}
        iconSize={10}
				rules={["minLength","specialChar","number","capital"]}
				minLength={8}
				value={password}
        onChange={isValid}
			  />
        }
        
      </DialogContent>
      <DialogActions>
        <Button onClick={validateAndSubmitForm} sx={{ mt: 2, mb: 2, mr: 2, color:'white', backgroundColor:'black', '&:hover':{backgroundColor:'rgb(255, 0, 136)'} }}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  </div>
  );
  }
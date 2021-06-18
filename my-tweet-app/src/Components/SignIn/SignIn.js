import React, { Component } from 'react'
import '../LoginPage/Login.css'
import {storage,auth} from "../firebase";

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            password:null,
        }
    }
    login=()=>{
        // localStorage.setItem("users","admin");
        // window.location.reload();
        auth.signInWithEmailAndPassword(this.state.emailId, this.state.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                localStorage.setItem("users",JSON.stringify(user));
                window.location.reload();
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    render() {
        return (
            <div>
                <input className ="loginPage_text" onChange={(event)=>{this.state.emailId=event.currentTarget.value}} type ="text" placeholder = "username"/>
                <input className ="loginPage_text" onChange={(event)=>{this.state.password=event.currentTarget.value}} type = "password" placeholder = "password"/>
                <button className ="loginPage_button" onClick={this.login}>Sign In</button>
            </div>
        )
    }
}

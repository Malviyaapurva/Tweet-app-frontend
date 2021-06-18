import React, { Component } from 'react'
import './SignUp.css'
import {storage,auth} from "../firebase";
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : null,
            lastName: null,
            email: null,
            loginId: null,
            password:null,
            confirmPassword:null,
            contactNumber:null
        }
    }
    newSignUp=()=>{
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            
            let payload = {
                "loginId":user.uid,
                "firstName":this.state.firstName,
                "lastName":this.state.lastName,
                "email":this.state.email,
                "password":this.state.password,
                "confirmPassword":this.state.confirmPassword,
                "contactNumber":this.state.contactNumber
            }

            const requestOptions ={
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(payload),
            }

            fetch("http://localhost:89/api/v1.0/tweets/register",requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("users",JSON.stringify(user));
                window.location.reload();
            })
            .catch(error =>{

            })

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }
    render() {
        return (
            <div>
                <input className ="loginPage_text" onChange={(event)=>{this.state.firstName=event.currentTarget.value;}} type ="text" placeholder = "First Name"/>
                <input className ="loginPage_text" onChange={(event)=>{this.state.lastName=event.currentTarget.value;}} type = "text" placeholder = "Last Name"/>
                <input className ="loginPage_text" onChange={(event)=>{this.state.email=event.currentTarget.value;}} type ="text" placeholder = "Email"/>
                <input className ="loginPage_text" onChange={(event)=>{this.state.loginId=event.currentTarget.value;}} type = "text" placeholder = "Login Id"/>
                <input className ="loginPage_text" onChange={(event)=>{this.state.password=event.currentTarget.value;}} type = "password" placeholder = "Password"/>
                <input className ="loginPage_text" onChange={(event)=>{this.state.confirmPassword=event.currentTarget.value;}} type = "password" placeholder = "Confirm Password"/>
                <input className ="loginPage_text" onChange={(event)=>{this.state.contactNumber=event.currentTarget.value;}} type = "text" placeholder = "Contact Number"/>
                <button className ="loginPage_button" onClick={this.newSignUp} >Sign Up</button>  
            </div>
        )
    }
}

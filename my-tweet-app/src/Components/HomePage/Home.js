import React, { Component } from 'react'
import MainContent from '../MainContent/MainContent'
import NavBar from '../NavBar/NavBar'
import SignIn from '../SignIn/SignIn';
import Login from '../LoginPage/Login';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
         }
    }
    render() {
        return (
            <div>
              <Login></Login>
                {/* <NavBar></NavBar>
                <MainContent></MainContent> */}
            </div>
        )
    }
}
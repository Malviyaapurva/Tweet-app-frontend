import React, { Component } from 'react'
import './NavBar.css'
import Grid from '@material-ui/core/Grid';
import Tweet_logo from "../../Images/Tweet_logo.png";
import find from "../../Images/find.svg";
import home from "../../Images/home.svg";
import love from "../../Images/love.svg";
import message from "../../Images/message.svg";
import Avatar from '@material-ui/core/Avatar';
import pp from "../../Images/pp1.png";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
         }
    }
    render() {
        return (
            <div>
                <div className="NavBar_barContent">
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                        <img className="NavBar_logo" src ={Tweet_logo} width="150px"></img>
                    </Grid>
                    <Grid item xs={3}>
                    <input text="text" className="navbar__searchBar" placeholder="Search" />
                    </Grid>
                    <Grid item xs={3} style={{"display":"flex"}}>
                        <img className="navbar__img" src={home} width="25px"></img>
                        <img className="navbar__img" src={message} width="25px"></img>
                        <img className="navbar__img" src={find} width="25px"></img>
                        <img className="navbar__img" src={love} width="25px"></img>
                        <Avatar src={pp} className="navbar__img" style={{"maxWidth":"25px","maxHeight":"25px"}} />
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
                </div>
            </div>
        )
    }
}

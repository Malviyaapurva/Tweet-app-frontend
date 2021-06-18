import React, { Component } from 'react';
import "./Suggestions.css"
import { Avatar } from '@material-ui/core';
import imageSrc1 from '../../Images/pp1.png'
import imageSrc2 from '../../Images/pp1.png'
import imageSrc3 from '../../Images/pp1.png'

class Suggestions extends Component {   
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <div className="suggestions__container">
                <div className="suggestions__header">
                    <div>Suggestions For You</div>
                </div>
                <div className="suggestions__body">
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc1} className="suggestions__image"/>
                        <div className="suggestions__username">testing_profile</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc2} className="suggestions__image"/>
                        <div className="suggestions__username">dummy_user</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc3} className="suggestions__image"/>
                        <div className="suggestions__username">technical_interview</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc2} className="suggestions__image"/>
                        <div className="suggestions__username">subscribe_me</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc3} className="suggestions__image"/>
                        <div className="suggestions__username">like_and _share</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc1} className="suggestions__image"/>
                        <div className="suggestions__username">hit_bell_icon</div>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Suggestions;
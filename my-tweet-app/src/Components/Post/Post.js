import React, { Component } from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';
import love from "../../Images/love.svg"; 
import comment from "../../Images/comment.svg"; 
import edit from "../../Images/edit1.jpg"; 
import del from "../../Images/delete1.png.jpg"; 

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList:[]
         }
    }
    componentDidMount(){
        this.getComments();
    }
    getComments=()=>{ 
        let data=[
            {
                "username": "ASD",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 1"
             }
            ,{
                "username": "anindya",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 2"
            },
            {
                "username": "dasgupta",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 3"
            }
        ];
        this.setState({commentList: data});
    }
    render() {
        return (
            <div className="post__container">
            {/* Header */}
          <div className="post__header">
                <Avatar className="post__image" src="" />
                <div className="post__username">
                    {this.props.username}
                   
                    </div>
                    <img className="post_edit" src ={edit}></img>
                    <img className="post_delete" src ={del}></img>
          </div>

          {/* Image */}
          <div>
             get tweet form here
              {/* <img src={this.props.postImage} width="615px" />  */}
          </div>

          {/* Analytics */}
          <div>
              <div style={{"marginLeft":"10px"}}>
                  <img src={love} className="post_reactimage"/>
                  <img src={comment} className="post_reactimage"/>
                  {/* <img src={share} className="post_reactimage"/> */}
              </div>
              <div style={{ "fontWeight":"bold","marginLeft":"20px  "}}>
                  {this.props.likes} likes     
              </div>
          </div>

          {/* Comment Section */}
          <div>
              {/* <div className="post_comment">Hello comment 1</div>
              <div className="post_comment">Hello comment 2</div>
              <div className="post_comment">Hello comment 3</div> */}
              {
                  this.state.commentList.map((item,index)=>(
                      index < 4 ?
                        <div className="post_comment">{item.username}: {item.description}</div> :<span></span>
                  ))
              }
          <input text="text" onKeyPress={this.submitComments} className="post__commentbox" placeholder="Add a comment..." />
          </div>
          
        </div> 
        )
    }
}

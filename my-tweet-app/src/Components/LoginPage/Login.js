import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import './Login.css'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin : true
         }
    }
    changeLogin=()=>{
            if(this.state.isLogin)
            this.setState({isLogin:false})
            else
            this.setState({isLogin:true})
    }
    render() {
        return (
            <div>
               <Grid container>
                   <Grid item xs={3}>
                       this
                   </Grid>
                   <Grid item xs={6}> 
                   <div  className="loginpage__main">
                       <div>
                       {/* <img src={inst_image} width="454px" /> */}
                       </div>
                       <div>
                       <div className="loginimage_rightcomponent">
                       {/* <img className="loginpage__logo" src={insta_logo} /> */}
                       <div className="loginPage__signin">
                           {
                               this.state.isLogin ? <SignIn/> : <SignUp/>
                           }
                        
                           <div className="login_ordiv">
                               <div className="login_dividor"></div>
                               <div className="login_or">OR</div>
                               <div className="login_dividor"></div>
                           </div>
                           <div className="login_forget"><h4>Forget Password?</h4></div>
                           <div className="login_signupoption">
                           {
                                        this.state.isLogin ?
                                        <div className="loginPage__signin">
                                                 Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign up</span>
                                        </div> :
                                        <div className="loginPage__signup">
                                                Have an account? <span onClick={this.changeLogin}  style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign in</span>
                                        </div>
                                    }
                           </div>
                       </div>
                           
                       </div>

                       </div>
                   </div>
                   </Grid>
                   <Grid item xs={3}>aayuashi</Grid>
               </Grid>
            </div>
        )
    }
}

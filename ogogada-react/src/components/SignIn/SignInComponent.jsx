import React from "react";
import { Subscribe } from "unstated";
//import { SignInStore } from "../../../stores";
import { Input, Button, Form, Label } from 'semantic-ui-react';
import { Redirect, Route, Link, withRouter} from 'react-router-dom';
import Home from "../Home/HomeComponent.jsx"
import "../../stylesheets/SignIn.css"
import firebase from "firebase"

function login (user_id, user_pw) {
    return new Promise(function(resolve, reject){
      firebase.database().ref('/accounts/').once('value', function(snapshot){
        var accounts = snapshot.val()
        for (var idx in accounts){
          if (user_id == idx && user_pw == accounts[idx]["pw"]){
            console.log("login!");
            console.log(accounts[idx]);
            return  resolve(accounts[idx]["level"]);
          }
          else if (user_id == idx && user_pw != accounts[idx]["pw"]){
            console.log("have accounts but wrong pw!");
            return resolve(false);
          }
        }
        
        return resolve(false);
      })
    })
  }

class SignInComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            pw: '',
            level: 1,
        }
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        
        login(this.state.id, this.state.pw).then((level)=>{
            console.log(level);
            this.setState({ level: level})
            this.props.history.push({
                pathname : '/home',
                state: {
                    id: this.state.id,
                    pw: this.state.pw,
                    level: level,
                }
            })
        })

    }

    render() {
        return (
            <div class="signInContainer">
                <div class="signInContainerBox">                    
                    <div class="texts">
                        <div class="ogogada">Ogogada</div>
                        <div class="si"> Sign In</div>
                    </div>
                    <div class="forms">
                        <Form>
                            <Form.Field>
                            <label>ID</label>
                            <input placeholder='Enter your ID' onChange = {(user_id) => {this.setState({id: user_id.target.value})}} autofocus="autofocus"/>
                            </Form.Field>
                            <Form.Field>
                            <label>PW</label>
                            <input type="password" placeholder='Enter your Password' onChange = {(user_pw) => this.setState({pw: user_pw.target.value})}/>
                            </Form.Field>
                            <Button onClick={()=>{this.routeChange()
                                }}>LOGIN</Button>
                                
                        </Form>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignInComponent);
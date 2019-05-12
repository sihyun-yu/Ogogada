import React from "react";
import { Subscribe } from "unstated";
//import { SignInStore } from "../../../stores";
import { Input, Button, Form, Label } from 'semantic-ui-react';
import { Redirect, Route, Link, withRouter} from 'react-router-dom';
import Home from "../Home/HomeComponent.jsx"
import "../../stylesheets/SignIn.css"
import {login} from "../../App.js"




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
        
        login(this.state.id, this.state.pw).then((aaa)=>{
            console.log(aaa);
            if (aaa){
                this.props.history.push({
                    pathname : '/home',
                    state: {
                        id: this.state.id,
                        pw: this.state.pw,
                        level: this.state.level,
                    }
                })
            }
            else {
                alert (aaa);
            }
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
                            <input placeholder='Enter your ID' onChange = {(user_id) => {this.setState({id: user_id.target.value})}}/>
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
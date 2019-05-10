import React from "react";
import { Subscribe } from "unstated";
//import { SignInStore } from "../../../stores";
import { Input, Button, Form, Label } from 'semantic-ui-react';
import { Redirect, Route, Link, withRouter} from 'react-router-dom';
import Home from "../Home/HomeComponent.jsx"
import "../../stylesheets/SignIn.css"




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
        this.props.history.push({
            pathname : '/home',
            state: {
                id: this.state.id,
                pw: this.state.pw,
                level: this.state.level,
            }
        });
    }

    render() {
        return (
            <div class="signInContainer">
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
                        <input placeholder='Enter your Password' onChange = {(user_pw) => this.setState({pw: user_pw.target.value})}/>
                        </Form.Field>
                        <Button onClick={()=>{this.state.id == "user" && this.state.pw == "1234" ?  this.routeChange() : alert("Please type again!")}}>LOGIN</Button>
                    </Form>

                </div>

            </div>
        )
    }
}

export default withRouter(SignInComponent);
import React from "react";
import { Subscribe } from "unstated";
//import { SignInStore } from "../../../stores";
import { Input, Button, Form } from 'semantic-ui-react';
import { Redirect, Route, Link, withRouter} from 'react-router-dom';
import Home from "../Home/HomeComponent.jsx"

const id = "user";
const pw = "1234";

function signIn(user_id, user_pw) {
    console.log(user_id, user_pw)
    if (user_id == id && user_pw == pw) {
        console.log("true");
        return true;
    }
    else {
        return false;
    }
}



class SignInComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            pw: '',
        }
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <Input placeholder='Id' onChange = {(user_id) => {this.setState({id: user_id.target.value})}}/>
                <Input placeholder='PW' onChange = {(user_pw) => this.setState({pw: user_pw.target.value})}/>
                <Button onClick={()=>{this.state.id == "user" && this.state.pw == "1234" ?  this.routeChange() : alert("wrong!")}}></Button>
                

            </div>
        )
    }
}

export default withRouter(SignInComponent);
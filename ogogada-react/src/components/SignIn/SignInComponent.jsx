import React from "react";
import { Subscribe } from "unstated";
//import { SignInStore } from "../../../stores";
import { Input, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const id = "user";
const pw = "1234";

function signIn(user_id, user_pw) {
    if (user_id == id && user_pw == pw) {
        return true;
    }
    else {
        return false;
    }
}



const SignInComponent = props => {
    return (
        <div>
            <Input placeholder='Id'/>
            <Input placeholder='PW'/>
            <Button onClick={signIn && <Redirect to="/home"/>}> SignIn </Button>

        </div>
    );
};

export default SignInComponent;
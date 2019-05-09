import React from "react";
import { Subscribe } from "unstated";
import { SignInStore } from "../../../stores";
import { Input, Button } from 'semantic-ui-react';



const SignInComponent = props => {
    return (
        <div>
            <Input placeholder='Id'/>
            <Input placeholder='PW'/>
            <Button
                onClick = {}
                > SignIn </Button>

        </div>
    );
};

export default SignInComponent;
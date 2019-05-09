import React from "react";
import { Subscribe } from "unstated";
import { HomeStore } from "../../stores";
import { Input, Button } from 'semantic-ui-react';



const HomeComponent = props => {
    return (
        <div>
            <Input placeholder='Id'/>
            <Input placeholder='PW'/>

        </div>
    );
};

export default HomeComponent;
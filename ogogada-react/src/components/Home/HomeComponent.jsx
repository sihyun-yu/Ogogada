import React from "react";
import { Subscribe } from "unstated";
import {HomeStore} from "../../stores";
import { Input, Button } from 'semantic-ui-react';


const HomeComponent = props => {
    console.log("home", props.location.state.id);
    const id = props.location.state.id;
    const pw = props.location.state.pw;
    const level = props.location.state.level;
    return (
        <Subscribe to = {[HomeStore]}>
        {user => (
            <div>
                
                
            </div>
            
        )

        }
            
        </Subscribe>
    );
};

export default HomeComponent;
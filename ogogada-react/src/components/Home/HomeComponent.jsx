import React from "react";
import { Subscribe } from "unstated";
import {HomeStore} from "../../stores";
import { Input, Button, Image } from 'semantic-ui-react';
import "../../stylesheets/Home.css"



var bg = require("../../assets/stage.png")
class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        console.log("home", this.props.location.state.id);
        const id = this.props.location.state.id;
        const pw = this.props.location.state.pw;
        const level = this.props.location.state.level;
        console.log(id);
        console.log(pw);
        console.log(level);

        return (
            <Subscribe to = {[HomeStore]}>
                {user => (
                    <div
                        className = "stage"
                    > 
                    <Button>hellp!</Button>
                    </div>
                    )
                    
                }
            </Subscribe>
        )
    }
}

/*
const HomeComponent = props => {
    console.log("home", props.location.state.id);
    const id = props.location.state.id;
    const pw = props.location.state.pw;
    const level = props.location.state.level;
    console.log(id);
    console.log(pw);
    console.log(level);
    return (
        <Subscribe to = {[HomeStore]}>
            {user => (
                <div>          
                    {user.update(id)}
                </div>
                
            )}
        </Subscribe>
    );
};
*/

export default HomeComponent;
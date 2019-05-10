import React from "react";
import windowSize from 'react-window-size';
import { Subscribe } from "unstated";
import {HomeStore} from "../../stores";
import { Input, Button, Image } from 'semantic-ui-react';
import "../../stylesheets/Home.css"
import Dimensions from 'react-dimensions';


function defaultGetDimensions (element) {
    return [element.clientWidth, element.clientHeight]
  }


var bg = require("../../assets/stage.png")
class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        
    }



    render() {

        console.log("home", this.props.location.state.id);
        const id = this.props.location.state.id;
        const pw = this.props.location.state.pw;
        const level = this.props.location.state.level;

        var x1 = this.props.windowWidth * 0.5;
        var y1 = this.props.windowHeight * 0.5;

        console.log(id);
        console.log(pw);
        console.log(level);
        console.log("x1, y1: ", x1, y1);

        return (
            <Subscribe to = {[HomeStore]}>
                {user => (
                    <div
                        className = "stage"
                    > 
                    {(x1 || y1) &&
                        <map name="image-map">
                        <area id="areas" shape="circle" coords={x1.toString() + "," + y1.toString() + ",5"}/>
                        </map>

                    }
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

export default windowSize(HomeComponent);
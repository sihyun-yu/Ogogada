import React from "react";
import windowSize from 'react-window-size';
import { Subscribe } from "unstated";
import {HomeStore} from "../../stores";
import { Input, Button, Image } from 'semantic-ui-react';
import { withRouter} from 'react-router-dom';
import ImageMapper from 'react-image-mapper';
import "../../stylesheets/Home.css"

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        //this.routeChange = this.routeChange.bind(this);
        
    }
    
    routeChange() {
        this.props.history.push({
            pathname : '../history',
            state: {
            }
        });
    }


    render() {

        console.log("home", this.props);
        const id = this.props.location.state.id;
        const pw = this.props.location.state.pw;
        const level = this.props.location.state.level;

        var x1 = this.props.windowWidth * 211/1280;
        var y1 = this.props.windowHeight * 114/720;
        var x2 = this.props.windowWidth * 425/1280;
        var y2 = this.props.windowHeight * 228/720;
        var x3 = this.props.windowWidth * 641/1280;
        var y3 = this.props.windowHeight * 352/720;
        var x4 = this.props.windowWidth * 852/1280;
        var y4 = this.props.windowHeight * 471/720;
        var x5 = this.props.windowWidth * 1066/1280;
        var y5 = this.props.windowHeight * 593/720;

        var URL = require("../../assets/stage.png")
        var MAP = {
        name: "my-map",
        areas: [
            { name: "1", shape: "circle", coords: [x1, y1, 63], },
            { name: "2", shape: "circle", coords: [x2, y2, 63],},
            { name: "3", shape: "circle", coords: [x3, y3, 63], },
            { name: "4", shape: "circle", coords: [x4, y4, 63], },
            { name: "5", shape: "circle", coords: [x5, y5, 63] },
        ]
        }

        console.log(id);
        console.log(pw);
        console.log(level);
        console.log("x1, y1: ", x1.toString() + "," + y1.toString() + ",63");

        return (
            <Subscribe to = {[HomeStore]}>
                {user => (
                    <div
                        className = "stage"
                    > 
                        <ImageMapper src={URL} map={MAP} width={this.props.windowWidth} height={this.props.windowHeight}
                            onClick={area => this.routeChange()}
                        
                        />

                    </div>
                    )
                    
                }
            </Subscribe>
        )
    }
}



export default withRouter(windowSize(HomeComponent));
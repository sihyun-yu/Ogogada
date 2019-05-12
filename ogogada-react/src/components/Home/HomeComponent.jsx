import React from "react";
import windowSize from 'react-window-size';
import { Subscribe } from "unstated";
import {HomeStore} from "../../stores";
import { Input, Button, Image } from 'semantic-ui-react';
import { withRouter} from 'react-router-dom';
import ImageMapper from 'react-image-mapper';
import "../../stylesheets/Home.css"
import { Card, Header, Icon, Feed } from 'semantic-ui-react'

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            pw:"",
            level:"",

        };
        this.routeChange = this.routeChange.bind(this);
        
    }
    
    routeChange(area) {
        console.log("routeChage", this.props.history);
        if (area.name == "history")
        {

            this.props.history.push({
                pathname : '../history',
                state: {
                    id: this.state.id,
                    pw: this.state.pw,
                    level: this.state.level,
                }
    
            });
        }
        else if (area.name == "ranking")
        {
            this.props.history.push({
                pathname : '../ranking',
                state: {
                    id: this.state.id,
                    pw: this.state.pw,
                    level: this.state.level,
                }
    
            });
        }
        else {
            this.props.history.push({
                pathname : '../pos/' + this.state.id + "/" + area.name,
                state: {
                    id: this.state.id,
                    pw: this.state.pw,
                    level: this.state.level,
                }
    
            });
        }
    }


    render() {

        console.log("home props: ", this.props);
        console.log("home state: ", this.state);
        this.state = this.props.location.state;
        console.log("home state: ", this.state);

        //this.setState({id:_id, pw:_pw, level:_level})

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
        var x_his = this.props.windowWidth * 1148/1280;
        var y_his = this.props.windowHeight * 134/720;
        var x_rank = this.props.windowWidth * 134/1280;
        var y_rank = this.props.windowHeight * 588/720;

        var URL = require("../../assets/home.png")
        var level_1 = { name: "1", shape: "circle", coords: [x1, y1, 63], }
        var level_2 = { name: "2", shape: "circle", coords: [x2, y2, 63], }
        var level_3 = { name: "3", shape: "circle", coords: [x3, y3, 63], }
        var level_4 = { name: "4", shape: "circle", coords: [x4, y4, 63], }
        var level_5 = { name: "5", shape: "circle", coords: [x5, y5, 63], }
        var level_array = [level_1, level_2, level_3, level_4, level_5]
        var areas= [];
        console.log (this.state["level"])
        for (var i=0; i<this.state["level"]; i++) {
            console.log ("area: " + i)
            areas.push(level_array[i])
        }
        areas.push({ name: "history", shape: "rect", coords: [x_his+63, y_his+63, x_his-63, y_his-63] })
        areas.push({ name: "ranking", shape: "circle", coords: [x_rank, y_rank, 63] })
        console.log ("areas: " + areas)
        var MAP = {
        name: "my-map",
        areas: areas
        }

        console.log("x1, y1: ", x1.toString() + "," + y1.toString() + ",63");

        return (                
                <div className = "home"> 
                    <div className = "home-header">
                        <Header as='h1'>
                            <Icon name="coffee"></Icon>
                        OGOGADA POS
                        </Header>
                    </div>
                    <div className = "home-user">
                        <Card>
                        <Card.Content>
                            <Card.Header>{this.state.id}</Card.Header>
                            <Card.Description>{"level: "+this.state.level}</Card.Description>
                        </Card.Content>
                        </Card>
                    </div>
                    <ImageMapper src={URL} map={MAP} width={this.props.windowWidth} height={this.props.windowHeight}
                        onClick={area => this.routeChange(area)}/>
                </div>
        )
    }
}



export default withRouter(windowSize(HomeComponent));
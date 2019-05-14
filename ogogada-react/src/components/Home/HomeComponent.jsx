import React from "react";
import windowSize from 'react-window-size';
import { Subscribe } from "unstated";
import {HomeStore} from "../../stores";
import { Input, Button, Image } from 'semantic-ui-react';
import { withRouter} from 'react-router-dom';
import ImageMapper from 'react-image-mapper';
import "../../stylesheets/Home.css"
import { Card, Header, Icon, Feed } from 'semantic-ui-react'
import firebase from "firebase"

function getUserFromDB (userName) {
    // console.log ("userName: " + userName)
    return new Promise(function (resolve, reject) {
        var myValue;
        firebase.database().ref('/accounts/'+userName).once('value', function (snapshot) {
            myValue = snapshot.val();
            return resolve(myValue)
        })
    })
} 

//window.location.reload(true);
class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pw: "",
            level: "",
        };
        this.state = this.props.location.state;
        this.routeChange = this.routeChange.bind(this);
        this.makeMAP = this.makeMAP.bind(this);
        this.imageMapper = "";
    }

    makeMAP (level) {
        console.log ("[makeMAP]")
        var x1 = this.props.windowWidth * 130/1024;
        var y1 = this.props.windowHeight * 220/768;
        var x2 = this.props.windowWidth * 300/1024;
        var y2 = this.props.windowHeight * 250/768;
        var x3 = this.props.windowWidth * 500/1024;
        var y3 = this.props.windowHeight * 350/768;
        var x4 = this.props.windowWidth * 670/1024;
        var y4 = this.props.windowHeight * 430/768;
        var x5 = this.props.windowWidth * 880/1024;
        var y5 = this.props.windowHeight * 593/768;
        var x_his = this.props.windowWidth * 300/1024;
        var y_his = this.props.windowHeight * 530/768;
        var x_rank = this.props.windowWidth * 150/1024;
        var y_rank = this.props.windowHeight * 600/768;
    
        var URL = require("../../assets/home.png")
        var level_1 = { name: "1", shape: "circle", coords: [x1, y1, 63], }
        var level_2 = { name: "2", shape: "circle", coords: [x2, y2, 63], }
        var level_3 = { name: "3", shape: "circle", coords: [x3, y3, 63], }
        var level_4 = { name: "4", shape: "circle", coords: [x4, y4, 63], }
        var level_5 = { name: "5", shape: "circle", coords: [x5, y5, 63], }
        var level_array = [level_1, level_2, level_3, level_4, level_5]
        var areas= [];

        console.log (level)
        for (var i=0; i<level; i++) {
            // console.log ("area: " + i)
            areas.push(level_array[i])
        }
        areas.push({ name: "history", shape: "rect", coords: [x_his, y_his, x_his+120, y_his+120] })
        areas.push({ name: "ranking", shape: "circle", coords: [x_rank, y_rank, 63] })
        console.log ("areas: " + areas)
        var MAP = {
        name: "my-map",
        areas: areas
        }
        console.log (MAP["areas"])
        return <ImageMapper src={URL} map={MAP} width={this.props.windowWidth} height={this.props.windowHeight} 
                        onClick={area => this.routeChange(area)}/>
    }

    
    routeChange(area) {
        // console.log("routeChage", this.props.history);
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

    componentWillMount() {
        getUserFromDB (this.state.id).then(res => {
            this.setState ({ level: res["level"], id: res["id"] }, () => {
            })
        })
    }

    componentDidMount() {
        getUserFromDB (this.state.id).then(res => {
            this.setState ({ level: res["level"], id: res["id"] }, () => {
            })
        })
    }

    render() {
        // console.log ("[render]")
        // console.log("home props: ", this.props);
        // console.log("home state: ", this.state);
        const imageMapper = this.makeMAP(this.state.level)

        // console.log("x1, y1: ", x1.toString() + "," + y1.toString() + ",63");
        console.log (imageMapper)
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
                            <Card.Description>{"level: " + this.state.level}</Card.Description>
                        </Card.Content>
                        </Card>
                    </div>
                    {imageMapper}
                </div>
                
        )
    }
}



export default withRouter(windowSize(HomeComponent));
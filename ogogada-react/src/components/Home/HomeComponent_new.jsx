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

function getRecFromDB () {
    return new Promise(function (resolve, reject) {
        var myValue;
        firebase.database().ref('/records').once('value', function (snapshot) {
            myValue = snapshot.val();
            console.log(myValue);
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
            hovered: false,
            opacity: 1,
            record: [],
            user_record: [],
        };
        this.state = this.props.location.state;
        this.routeChange = this.routeChange.bind(this);

    }
    /*
    makeMAP (level) {
        console.log ("[makeMAP]")
        var level_r = this.props.windowWidth * 67/1283;
        var x1 = this.props.windowWidth * 169/1283;
        var y1 = this.props.windowHeight * 226/1106;
        var x2 = this.props.windowWidth * 386/1283;
        var y2 = this.props.windowHeight * 350/1106;
        var x3 = this.props.windowWidth * 609/1283;
        var y3 = this.props.windowHeight * 474/1106;
        var x4 = this.props.windowWidth * 831/1283;
        var y4 = this.props.windowHeight * 600/1106;
        var x5 = this.props.windowWidth * 1064/1283;
        var y5 = this.props.windowHeight * 724/1106;
        var x_his1 = this.props.windowWidth * 396/1283;
        var y_his1 = this.props.windowHeight * 776/1106;
        var x_his2 = this.props.windowWidth * 572/1283;
        var y_his2 = this.props.windowHeight * 964/1106;
        var rank_r = this.props.windowWidth * 90/1283;
        var x_rank = this.props.windowWidth * 196/1283;
        var y_rank = this.props.windowHeight * 852/1106;
    
        var URL = require("../../assets/Home_base.png")
        var level_1 = { name: "1", shape: "circle", coords: [x1, y1, level_r], }
        var level_2 = { name: "2", shape: "circle", coords: [x2, y2, level_r], }
        var level_3 = { name: "3", shape: "circle", coords: [x3, y3, level_r], }
        var level_4 = { name: "4", shape: "circle", coords: [x4, y4, level_r], }
        var level_5 = { name: "5", shape: "circle", coords: [x5, y5, level_r], }
        var level_array = [level_1, level_2, level_3, level_4, level_5]
        var areas= [];

        console.log (level)
        for (var i=0; i<level; i++) {
            // console.log ("area: " + i)
            areas.push(level_array[i])
        }

        areas.push({ name: "history", shape: "rect", coords: [x_his1, y_his1, x_his2, y_his2] })
        areas.push({ name: "ranking", shape: "circle", coords: [x_rank, y_rank, rank_r] })
        console.log ("areas: " + areas)
        var MAP = {
        name: "my-map",
        areas: areas
        }
        console.log (MAP["areas"])
        return <ImageMapper src={URL} map={MAP} width={this.props.windowWidth} height={this.props.windowHeight} 
                        onClick={area => this.routeChange(area)}/>
    }
    */

    
    routeChange(area) {
        // console.log("routeChage", this.props.history);
        if (area.name == "history")
        {

            this.props.history.push({
                pathname : '../tutorial/' + area.level + '/' + this.state.id,
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
                id: this.state.id,
                pw: this.state.pw,
                level: this.state.level,
    
            });
        }
        else if (area.name == "pos"){
            this.props.history.push({
                pathname : '../stage/' + area.level + '/' + this.state.id,
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
            this.setState ({ level: res["level"], id: res["id"], user_record: res["record"] }, () => {
            })
        })
        getRecFromDB ().then(res => {
            this.setState ({ record: res }, () => {
            })
        })
    }

    render() {
        // console.log ("[render]")
        // console.log("home props: ", this.props);
        // console.log("home state: ", this.state);
        //const imageMapper = this.makeMAP(this.state.level)
        console.log("home cur leve", this.state.level)
        // console.log("x1, y1: ", x1.toString() + "," + y1.toString() + ",63");
        //console.log (imageMapper)
        let drawStar = (level) => {
            let star = "0";

            if (typeof (this.state.record) != 'undefined' && typeof(this.state.user_record) != 'undefined')
            {
                //console.log(this.state.record[level])
                for (var i in this.state.record[level]){
                    //console.log(this.state.user_record[level-1], this.state.record[level][i]["record"]);
                    if (this.state.user_record[level-1] == this.state.record[level][i]["record"]
                    && this.state.id == this.state.record[level][i]["id"]
                    && this.state.record[level][i]["rank"] <= 3){
                        star = "3"
                        const src = '/images/' + star + 'star@3x.png';

                        return <Image src={src} size="tiny"/>
                    }
                    else if (
                        this.state.user_record[level-1] == this.state.record[level][i]["record"]
                    && this.state.id == this.state.record[level][i]["id"]
                    && this.state.record[level][i]["rank"] <= 6){
                        star = "2"
                        const src = '/images/' + star + 'star@3x.png';

                        return <Image src={src} size="tiny"/>
                    }
                    else if (
                        this.state.user_record[level-1] == this.state.record[level][i]["record"]
                    && this.state.id == this.state.record[level][i]["id"]
                    && this.state.record[level][i]["rank"] <= 8
                    ){
                        star = "1"
                        const src = '/images/' + star + 'star@3x.png';

                        return <Image src={src} size="tiny"/>
                    }
                    
                }
                const src = '/images/' + star + 'star@3x.png';

                return <Image src={src} size="tiny"/>
                
                
            }

        }
        return (                
                <div className = "home"
                onMouseDown={()=> this.setState({opacity: 1})} onMouseUp={()=>this.setState({opacity: 0})}
                > 
                    <div className = "home-id">
                            {this.state.id}
                            
                    </div>
                    <div className="home-level">
                            {"level: " + this.state.level}

                    </div>

                        <div className={['home-rank', this.state.opacity && 'hover'].join(' ')}
                        >
                            <Image src='/images/rank.png' size="medium" 
                            onClick={() => {this.routeChange({name: "ranking"})}}/>
                        </div>


                    <div className = {['home-ladder1', this.state.opacity && 'hover'].join(' ')}>
                    <Image src='/images/ladder1@3x.png' size="tiny" onClick={() => {this.routeChange({name: "history", level: "1"})}} hidden={this.state.level < 1}/>
                    </div>
                    <div className = {['home-ladder2', this.state.opacity && 'hover'].join(' ')}>
                    <Image src='/images/ladder2@3x.png' size="small" onClick={() => {this.routeChange({name: "history", level: "2"})}} hidden={this.state.level < 2}/>
                    </div>
                    <div className = {['home-ladder3', this.state.opacity && 'hover'].join(' ')}>
                    <Image src='/images/ladder3@3x.png' size="tiny" onClick={() => {this.routeChange({name: "history", level: "3"})}} hidden={this.state.level < 3}/>
                    </div>
                    <div className = {['home-ladder4', this.state.opacity && 'hover'].join(' ')}>
                    <Image src='/images/ladder4@3x.png' size="tiny" onClick={() => {this.routeChange({name: "history", level: "4"})}} hidden={this.state.level < 4}/>
                    </div>
                    <div className = {['home-ladder5', this.state.opacity && 'hover'].join(' ')}>
                    <Image src='/images/ladder5@3x.png' size="tiny" onClick={() => {this.routeChange({name: "history", level: "5"})}} hidden={this.state.level < 5}/>
                    </div>
                    <div className = {['home-level1', this.state.opacity && 'hover'].join(' ')}>
                    {drawStar(1)}
                    <Image src='/images/level1_yellow@3x.png' size="tiny" onClick={() => {this.routeChange({name: "pos", level: "1"})}} hidden={this.state.level < 1}/>
                    </div>
                    {this.state.level >= 2 &&
                        <div className = {['home-level2', this.state.opacity && 'hover'].join(' ')}>
                        {drawStar(2)}
                        <Image src='/images/level2_yellow@3x.png' size="tiny" onClick={() => {this.routeChange({name: "pos", level: "2"})}}/>
                        </div>
                    }
                    {this.state.level < 2 &&
                        <div className ={['home-level2', this.state.opacity && 'hover'].join(' ')}>
                        {drawStar(2)}
                        <Image src='/images/level2_gray@3x.png' size="tiny"/>
                        </div>
                    }

                    {this.state.level >= 3 &&
                        <div className = {['home-level3', this.state.opacity && 'hover'].join(' ')}>
                        {drawStar(3)}
                        <Image src='/images/level3_yellow@3x.png' size="tiny" onClick={() => {this.routeChange({name: "pos", level: "3"})}} />
                        </div>
                    }
                    {this.state.level < 3 &&
                        <div className = {['home-level3', this.state.opacity && 'hover'].join(' ')}>
                        {drawStar(3)}
                        <Image src='/images/level3_gray@3x.png' size="tiny" />
                        </div>
                    }

                    {this.state.level >= 4 &&
                        <div className = {['home-level4', this.state.opacity && 'hover'].join(' ')}>
                        {drawStar(4)}
                        <Image src='/images/level4_yellow@3x.png' size="tiny" onClick={() => {this.routeChange({name: "pos", level: "4"})}}/>
                        </div>
                    }
                    {this.state.level < 4 &&
                        <div className = {['home-level4', this.state.opacity && 'hover'].join(' ')}>
                        {drawStar(4)}
                        <Image src='/images/level4_gray@3x.png' size="tiny"  />
                        </div>
                    }
                    {this.state.level >= 5 &&
                        <div className = {['home-level5', this.state.opacity && 'hover'].join(' ')}>
                        {drawStar(5)}
                        <Image src='/images/level5_yellow@4x.png' size="tiny" onClick={() => {this.routeChange({name: "pos", level: "5"})}} />
                        </div>
                    }
                    {this.state.level < 5 &&
                        <div className = {['home-level5', this.state.opacity && 'hover'].join(' ')}>
                        {drawStar(5)}
                        <Image src='/images/level5_gray@4x.png' size="tiny" />
                        </div>
                    }

                </div>
                
        )
    }
}



export default withRouter(windowSize(HomeComponent));

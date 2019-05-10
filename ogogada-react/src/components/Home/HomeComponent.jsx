import React from "react";
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

    getWrappedInstance () {
        return this.refs.wrappedInstance
    }


    updateDimensionsImmediate = () => {
        const dimensions = defaultGetDimensions(this._parent)

        if (dimensions[0] !== this.state.containerWidth ||
            dimensions[1] !== this.state.containerHeight) {
          this.setState({
            containerWidth: dimensions[0],
            containerHeight: dimensions[1]
          })
        }
    }

    componentDidMount(){
        console.log(this.refs)
        if (!this.refs.wrapper) {
            throw new Error('Cannot find wrapper div')
          }
          this._parent = this.refs.wrapper.parentNode
          this.updateDimensionsImmediate()
    }



    render() {
        const {containerWidth, containerHeight} = this.state
        if (this._parent && !containerWidth && !containerHeight) {
          // only trigger a warning about the wrapper div if we already have a reference to it
          console.warn('Wrapper div has no height or width, try overriding style with `containerStyle` option')
        }
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
                    {(containerWidth || containerHeight) &&
                        <map name="image-map">
                        <area id="areas" shape="circle" coords={containerWidth.toString() + "," + containerHeight.toString() + ",5"}/>
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

export default HomeComponent;
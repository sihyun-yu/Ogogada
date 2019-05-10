import React from "react";
import { withRouter} from 'react-router-dom';

class RankingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            pw:"",
            level:"",

        };
        this.routeChange = this.routeChange.bind(this);
        
    }
    render () {
        return (
            <label>hello!</label>
        )
    }
}

export default withRouter(RankingComponent);
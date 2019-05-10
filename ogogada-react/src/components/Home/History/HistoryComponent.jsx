import React from "react";

class HistoryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        
    }
    
    render () {
        this.state = this.props.location.state;
        console.log(this);
        return (
            <div>
                <button>h</button>
            </div>
        )
    }
}

export default HistoryComponent;
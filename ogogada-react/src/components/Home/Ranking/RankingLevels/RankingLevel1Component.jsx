import React from "react";
import "../../../../stylesheets/RankingLevel.css"
import { Image , Button} from 'semantic-ui-react'

import src1 from '../../../../assets/ranking_template.png';

class RankingLevel1Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"seongha",
            pw:"",
            level:"",
            time: "00:00:00",

        };
    }
    render () {
        return (
            <div id="rankingLevel"> 
                    <div id="rankingTemplate" >
                        <Image src={src1} alt="hey!" />
                        <span class="one">{this.state.id+"   "+this.state.time}</span>
                        <span class="two">{this.state.id+"   "+this.state.time}</span>
                        <span class="three">{this.state.id+"   "+this.state.time}</span>
                        <span class="four">{this.state.id+"   "+this.state.time}</span>
                        <span class="five">{this.state.id+"   "+this.state.time}</span>
                        <span class="six">{this.state.id+"   "+this.state.time}</span>
                        <span class="seven">{this.state.id+"   "+this.state.time}</span>
                        <span class="eight">{this.state.id+"   "+this.state.time}</span>

                    </div>
                    <div id="backButton">
                        <Button >Back</Button>
                    </div>





            </div>
            
            
        )
    }

}

export default RankingLevel1Component;
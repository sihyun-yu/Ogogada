import React from "react";
import "../../../../stylesheets/RankingLevel.css"
import { Image , Button, Item} from 'semantic-ui-react'

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
                    <div id="rankingLeft" >
                    <Item.Group>
                        <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='a'>12 Years a Slave</Item.Header>
                        </Item.Content>
                        </Item>

                        <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='a' content='My Neighbor Totoro' />
                        </Item.Content>
                        </Item>

                        <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content header='Watchmen' verticalAlign='middle' />
                        </Item>

                        <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content header='Watchmen' verticalAlign='middle' />
                        </Item>
                    </Item.Group>
                    </div>
                    <div id="rankingRight" >
                    <Item.Group>
                        <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='a'>12 Years a Slave</Item.Header>
                        </Item.Content>
                        </Item>

                        <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='a' content='My Neighbor Totoro' />
                        </Item.Content>
                        </Item>

                        <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content header='Watchmen' verticalAlign='middle' />
                        </Item>

                        <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content header='Watchmen' verticalAlign='middle' />
                        </Item>
                    </Item.Group>
                    </div>
                    <div id="backButton">
                        <Button >Back</Button>
                    </div>





            </div>
            
            
        )
    }

}

export default RankingLevel1Component;
import React from "react";
import { withRouter} from 'react-router-dom';
import { Icon, Table, Button } from 'semantic-ui-react'
import "../../../stylesheets/Ranking.css"

var winners = [
    "Yoonseo Kim",
    "Sangmin Lee",
    "Yoonseo Kim",
    "Sihyun Yu",
    "Sungha Eom"
];

class RankingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            pw:"",
            level:"",

        };
        //this.routeChange = this.routeChange.bind(this);
        
    }

    render () {
        return (
            <div id="totalContainer">
                <div style={{"width": "40%"}}></div>
                <div id="rankingContainer">
                    <Table celled striped inverted selectable id="tableContainer">
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>Ranking</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell>Basic</Table.HeaderCell>
                            <Table.HeaderCell>Task</Table.HeaderCell>
                            <Table.HeaderCell>Winner</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row onClick={() => this.props.history.push('ranking/1')}>
                            <Table.Cell collapsing>
                                <Icon name='trophy' /> Level 1
                            </Table.Cell>
                            <Table.Cell>Take an order of 1 ice americano</Table.Cell>
                            <Table.Cell collapsing textAlign='right'>{winners[0]}</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('ranking/2')}>
                            <Table.Cell>
                                <Icon name='trophy' /> Level 2
                            </Table.Cell>
                            <Table.Cell>Take an order of 2 green tea latte</Table.Cell>
                            <Table.Cell textAlign='right'>{winners[1]}</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('ranking/3')}>
                            <Table.Cell>
                                <Icon name='trophy' /> Level 3
                            </Table.Cell>
                            <Table.Cell>Apply student discount</Table.Cell>
                            <Table.Cell textAlign='right'>{winners[2]}</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('ranking/4')}>
                            <Table.Cell>
                                <Icon name='trophy' /> Level 4
                            </Table.Cell>
                            <Table.Cell>Use an ice americano gifticon</Table.Cell>
                            <Table.Cell textAlign='right'>{winners[3]}</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('ranking/5')}>
                            <Table.Cell>
                                <Icon name='trophy' /> Level 5
                            </Table.Cell>
                            <Table.Cell>Refund most recent order</Table.Cell>
                            <Table.Cell textAlign='right'>{winners[4]}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowSpan='10' colSpan='3' style={{"content": "''"}}></Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
                <div style={{"width": "40%"}}>
                    <Button id="backButton" onClick={() => this.props.history.push('/home')}>Back</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(RankingComponent);
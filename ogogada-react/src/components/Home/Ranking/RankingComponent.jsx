import React from "react";
import { withRouter} from 'react-router-dom';
import { Icon, Table, Button } from 'semantic-ui-react'
import "../../../stylesheets/Ranking.css"
import firebase from "firebase";

var winners = [];

function getWinnerFromDB (level) {
    return new Promise(function(resolve, reject) {
        var myValue;
        firebase.database().ref('/records/'+level+'/0').once('value', function(snapshot) {
            myValue = snapshot.val();
            return resolve(myValue["id"]);
        });        
    })
}

class RankingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            pw:"",
            level:"",
            data: []
        };
        //this.routeChange = this.routeChange.bind(this);
        
    }

    componentDidMount() {
        for (var i = 1; i < 6; i++) {
            getWinnerFromDB(i).then(res=> 
                {
                    winners.push(res)
                    this.setState({data: winners})
                });
        }
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
                            <Table.Cell textAlign='right'>{winners[0]}</Table.Cell>
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
                    <Button id="backButton" onClick={() => this.props.history.goBack()}>Back</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(RankingComponent);
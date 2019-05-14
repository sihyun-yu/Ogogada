import React from "react";
import { withRouter} from 'react-router-dom';
import { Icon, Table, Button, Header } from 'semantic-ui-react'
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
        console.log("RankingComponent" ,this.props.history);
        this.state = {
            id: this.props.history.location.id,
            pw:"",
            level: this.props.history.location.level,
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
                        <Table.Row onClick={() => this.props.history.push({pathname: 'ranking/1', id: this.state.id})}>
                            <Table.Cell collapsing>
                                <Icon name='trophy' /> Level 1
                            </Table.Cell>
                            <Table.Cell>Take an order for one HOT americano and one ICE americano with card.</Table.Cell>
                            <Table.Cell textAlign='right'>{winners[0]}</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push({pathname: 'ranking/2', id: this.state.id})}>
                            <Table.Cell>
                                <Icon name='trophy' /> Level 2
                            </Table.Cell>
                            <Table.Cell>Take an order for two ICE caramel macchiato and one HOT green tea latte with card.</Table.Cell>
                            <Table.Cell textAlign='right'>{winners[1]}</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push({pathname: 'ranking/3', id: this.state.id})}>
                            <Table.Cell>
                                <Icon name='trophy' /> Level 3
                            </Table.Cell>
                            <Table.Cell>Take an order for five ICE peppermint by 10% discount with card.</Table.Cell>
                            <Table.Cell textAlign='right'>{winners[2]}</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push({pathname: 'ranking/4', id: this.state.id})}>
                            <Table.Cell>
                                <Icon name='trophy' /> Level 4
                            </Table.Cell>
                            <Table.Cell>A customer wants to use one ICE americano gifticon and order one ICE caffelatte. Calculate the difference with card.</Table.Cell>
                            <Table.Cell textAlign='right'>{winners[3]}</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push({pathname: 'ranking/5', id: this.state.id})}>
                            <Table.Cell>
                                <Icon name='trophy' /> Level 5
                            </Table.Cell>
                               
                            <Table.Cell> A customer wants to cancel the order that he/she made just now. Refund the most recent order.</Table.Cell>
                            <Table.Cell textAlign='right'>{winners[4]}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowSpan='10' colSpan='3' style={{"content": "''"}}></Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
                <div style={{"width": "40%"}}>
                    <Button id="backButton" onClick={() => this.props.history.push({pathname: '../home', state: {id: this.state.id, pw: "", level: this.state.level}})}>Back</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(RankingComponent);
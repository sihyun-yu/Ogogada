import React from "react";
import "../../../stylesheets/History.css"
import { Icon, Table, Button } from 'semantic-ui-react'

class HistoryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state;
        //{id: "seongha", pw: "4321", level: 1}
        
    }
    
    render () {
        console.log("HistoryComponent: ", this.props.location.state);
        return (
            <div id="totalContainer">
                <div style={{"width": "40%"}}></div>
                <div id="historyContainer">
                    <Table celled striped inverted selectable id="tableContainer">
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='2'>History List</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell colSpan='2'>Basic</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row onClick={() => this.props.history.push('/1')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' /> Level 1
                            </Table.Cell>
                            <Table.Cell>Take an order of 1 ice americano and 1 hot americano</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/2')}>
                            <Table.Cell>
                            <Icon name='coffee' /> Level 2
                            </Table.Cell>
                            <Table.Cell>Take an order of 2 green tea latte and 1 hot vanilla latte</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/3')}>
                            <Table.Cell>
                            <Icon name='coffee' /> Level 3
                            </Table.Cell>
                            <Table.Cell>Apply student discount</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/4')}>
                            <Table.Cell>
                            <Icon name='coffee' /> Level 4
                            </Table.Cell>
                            <Table.Cell>Use an ice americano gifticon</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/5')}>
                            <Table.Cell>
                            <Icon name='coffee' /> Level 5
                            </Table.Cell>
                            <Table.Cell>Refund most recent order</Table.Cell>
                        </Table.Row>
                        </Table.Body>

                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='2'>More</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => this.props.history.push('/home')}>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
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

export default HistoryComponent;
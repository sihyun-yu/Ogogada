import React from "react";
import "../../../stylesheets/History.css"
import { Icon, Table, Button } from 'semantic-ui-react'


class HistoryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state;
        this.routeChange = this.routeChange.bind(this);

        //{id: "seongha", pw: "4321", level: 1}
        
    }

    routeChange(stage) {
        this.props.history.push({
            pathname : '../tutorial/' + stage + "/" + this.state.id ,
                state: {
                id: this.state.id,
                pw: this.state.pw,
                level: this.state.level,
            }   
        });
    }
    
    render () {
        // console.log("HistoryComponent: ", this.props.location.state);
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
                        <Table.Row onClick={() => {
                            this.props.history.push('/1')
                            this.routeChange("1")
                        }
                        }>
                            <Table.Cell collapsing>
                            <Icon name='coffee' /> Level 1
                            </Table.Cell>
                            <Table.Cell>Take an order of 1 hot americano</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => {
                            if (this.state.level >= 2) {
                            this.props.history.push('/2')
                            this.routeChange("2")
                        }
                        }
                        }>
                            <Table.Cell disabled={this.props.location.state.level < 2}>
                            <Icon name='coffee' /> Level 2
                            </Table.Cell>
                            <Table.Cell>Take an order of 2 ice caffe mocha and 1 hot earl grey</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => {
                            if (this.state.level >= 3 ){
                                this.props.history.push('/3')
                                this.routeChange("3")
                            }
                        }
                        }>
                            <Table.Cell disabled={this.props.location.state.level < 3}>
                            <Icon name='coffee' /> Level 3
                            </Table.Cell>
                            <Table.Cell>Apply student discount</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => {
                            if (this.state.level >= 4) {
                            this.props.history.push('/4')
                            this.routeChange("4")
                        }
                        }
                        }>
                            <Table.Cell disabled={this.props.location.state.level < 4}>
                            <Icon name='coffee' /> Level 4
                            </Table.Cell>
                            <Table.Cell>Use an ice americano gifticon</Table.Cell>
                        </Table.Row>
                        <Table.Row onClick={() => {
                            if (this.state.level >= 5) {
                                this.props.history.push('/5')
                                this.routeChange("5")
                            }
                        }
                        }>
                            <Table.Cell disabled={this.props.location.state.level < 5}>
                            <Icon name='coffee' /> Level 5
                            </Table.Cell>
                            <Table.Cell>Refund most recent order</Table.Cell>
                        </Table.Row>
                        </Table.Body>

                        <Table.Header disabled={true}>
                        <Table.Row>
                            <Table.HeaderCell colSpan='2'>More</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
                <div style={{"width": "40%"}}>
                    <Button id="backButton" onClick={() => this.props.history.push({
                        pathname : '../home',
                        state: this.props.location.state,})}>
                    Back</Button>
                </div>
            </div>
        )
    }
}

export default HistoryComponent;
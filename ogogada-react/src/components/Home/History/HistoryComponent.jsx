import React from "react";
import "../../../stylesheets/History.css"
import { Icon, Table } from 'semantic-ui-react'

class HistoryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        
    }
    
    render () {
/*
        return (
            <div id="totalContainer">
                <div id="historyContainer">
                    <div id="title">
                        <h2>Hisotry List</h2>
                    </div>
                    <div className="historyType">
                        <button>Basic</button>
                    </div>
                    <div className="historyStage">
                        <h4 onClick={() => this.props.history.push('/pos')}>Level 1</h4>
                    </div>
                    <div className="historyStage">
                        <h4 onClick={() => this.props.history.push('/pos')}>Level 2</h4>
                    </div>
                    <div className="historyStage">
                        <h4 onClick={() => this.props.history.push('/pos')}>Level 3</h4>
                    </div>
                    <div className="historyStage">
                        <h4 onClick={() => this.props.history.push('/pos')}>Level 4</h4>
                    </div>
                    <div className="historyStage">
                        <h4 onClick={() => this.props.history.push('/pos')}>Level 5</h4>
                    </div>
                    <div className="historyType">
                        <button>More</button>
                    </div>
                    <div style={{flex: 2}}>
                        <h4>Level 5</h4>
                    </div>
                    <div style={{flex: 2}}>
                        <h4>Level 5</h4>
                    </div>
                    <div style={{flex: 2}}>
                        <h4>Level 5</h4>
                    </div>
                    <div style={{flex: 2}}>
                        <h4>Level 5</h4>
                    </div>
                </div>
            </div>
        )*/

        return (
            <div id="totalContainer">
                <div id="historyContainer">
                    <Table celled striped inverted selectable id="tableContainer">
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>History List</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>Basic</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell collapsing>
                            <Icon name='coffee' /> Level 1
                            </Table.Cell>
                            <Table.Cell>Take an order of 1 ice americano and 1 hot americano</Table.Cell>
                            <Table.Cell collapsing textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' /> Level 2
                            </Table.Cell>
                            <Table.Cell>Take an order of 2 green tea latte and 1 hot vanilla latte</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' /> Level 3
                            </Table.Cell>
                            <Table.Cell>Apply student discount</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' /> Level 4
                            </Table.Cell>
                            <Table.Cell>Use an ice americano gifticon</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' /> Level 5
                            </Table.Cell>
                            <Table.Cell>Refund most recent order</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        </Table.Body>

                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>More</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell collapsing textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell collapsing textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell collapsing>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell collapsing textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Icon name='coffee' />
                            </Table.Cell>
                            <Table.Cell>Not yet</Table.Cell>
                            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}

export default HistoryComponent;
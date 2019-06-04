import React from "react";
import "../../../../stylesheets/RankingLevel.css"
import { Image , Button, Header, Table} from 'semantic-ui-react'
import firebase from "firebase";

function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

function getRankingsFromDB (level) {
    console.log ('/records/'+level)
    return new Promise(function(resolve, reject) {
        var myValue;
        firebase.database().ref('/records/'+level).once('value', function(snapshot) {
            console.log ("get ranking from db")
            myValue = snapshot.val();
            console.log (myValue)
            return resolve(myValue);
            
        });        
    })
}

class RankingLevelComponent extends React.Component {
    constructor(props) {
        super(props);
        // getRankingsFromDB (1).then((data)=> {
        //     this.state = data
        //     console.log ("C")
        //     console.log (data)
        //     console.log ("D")
        // })
        this.state = {
            data: [],
            id : this.props.history.location.id,
        }

    }

    componentDidMount() {
        getRankingsFromDB (this.props.match.params.id).then(res=> 
            {
                console.log ("start of will mount")
                console.log(res)
                // console.log(res[0]["id"])
                // console.log(res[1])
                this.setState ({data: res}, () => {
                    console.log("AAAAAAAAAAAAA")
                })
                // this.state = ({ data: "A" }, () => {
                //     console.log ("SIII")
                //     console.log (this.state.data)
                // })
                console.log("a")
                console.log (this.state.data)
                // console.log (this.state.data["id"])
                // console.log (this.state.data[0])
            });
        // {
        //     this.setState = ({data: data})
        //     console.log ("C")
        //     console.log (data)
        //     console.log ("D")
        // })
    }

    render () {
        const classNames = ["one", "two", "three", "four", "five", "six", "seven", "eight"]

        const ranking = this.state.data.map(function(item, i) {
            console.log (item["id"])
            var time = pad(Math.floor((item["record"]/1000)/60), 2)+ " : " + pad(Math.floor((item["record"]/1000)%60), 2) + " : "  + pad(Math.floor((item["record"]%1000)/10), 2)
            return <Table.Row> 
                <Table.Cell>
                    <Header.Content>
                    {item["id"]}
                    </Header.Content>
                </Table.Cell>
                <Table.Cell>{time}</Table.Cell>
                </Table.Row>
        })
        console.log ("ranking level compoenent", this.state.id)

        return (
            <div id="rankingLevel"> 
                    <div style={{"width": "40%"}} id="rankingContainer">
                        <Table celled striped inverted id="tableContainer">
                            <Table.Header>
                            <Table.Row as='h1' size= 'medium' color="brown" id="level">Level {this.props.match.params.id} </Table.Row>
                            <Table.Row>
                                <Button className="backButton" onClick={() => this.props.history.push({pathname: '../ranking', id: this.state.id})}>Back</Button>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell>User ID</Table.HeaderCell>
                                <Table.HeaderCell>Record</Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>
                            <Table.Body>
                            {ranking}
                            </Table.Body>
                        </Table>
                    </div>

                    
            </div>       
        )
    }
}

export default RankingLevelComponent;
import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, Fa } from 'mdbreact';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import firebase from "../../fire";

class ModalGraph extends Component {

    constructor(props) {
        super();

        this.state = {
            modal: false,
            graphData: [],
            title: props.title,
            device: props.device,
            first: "",
            last: ""
        };

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });

        ReactChartkick.addAdapter(Chart);
        var ref = "users/user1/systemData/"+this.state.device+"/sensorData/"+this.state.title+"/allData";

        const dataRef = firebase.database().ref(ref).orderByChild("time");

        if(!this.state.modal){
            dataRef.once("value", snap => {
                const data = [];
                snap.forEach(function(n){
                    var val = n.val();
                    var date = new Date(val.time);
                    var dateString = date.toLocaleDateString()+"["+date.getHours()+":"+("0" + date.getMinutes()).slice(-2)+"]";
                    data.push([dateString,val.reading]);
                });

                if(data.length>0){
                    this.setState({
                        first: data[0][0],
                        last: data[data.length-1][0]
                    })
                }

                this.setState({
                    graphData: data
                })
            });
        }
        else{
            return(
                <Fa icon="circle-o-notch" spin size="3x"/>
            )
        }
    };

    render() {
        var date = new Date().toLocaleDateString();
        var gName = "Sensor"+date;
        return (
            <Container>
                <div className="d-flex justify-content-around">
                    <Button color="info" onClick={this.toggle}>View Graph</Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <ModalHeader toggle={this.toggle}>{this.state.title} Data from {this.state.first} - {this.state.last}</ModalHeader>
                    <ModalBody>
                        <LineChart data={this.state.graphData}
                                   dataset={{pointRadius: 5}}
                                   download={gName}
                                   messages={{empty:"No data loaded"}}
                                   library={{
                                       scales: {
                                           xAxes: [{
                                               ticks: {
                                                   maxRotation:0
                                               }
                                           }]
                                       },
                                       title: {
                                           display: false,
                                           text: "Data from "+this.state.first+" - "+this.state.last
                                       },
                                       hover: {
                                           mode: 'nearest',
                                           intersect: true
                                       },
                                       tooltips: {
                                           mode: 'index',
                                           intersect: false,
                                       }
                                   }}
                                   curve={false}/>
                    </ModalBody>
                    <div className="d-flex justify-content-around">
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </Container>
        );
    }
}
export default ModalGraph;
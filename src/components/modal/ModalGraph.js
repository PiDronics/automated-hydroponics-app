import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import firebase from "../../fire";

class ModalGraph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            title: props.title,
            device: props.device,
            first: "",
            last: ""
        };
    }

    createSinglePoint(data_item) {
        let val = data_item.val();
        let date = new Date(val.time);
        let dateString = date.toLocaleDateString() + "[" + date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2) + "]";
        return [dateString, val.reading];
    }

    getAllGraphPoints(fb_snapshot) {
        try {
            const all_points = [];
            fb_snapshot.forEach((n) => {
                let single_point = this.createSinglePoint(n);
                all_points.push(single_point);
            });
            return all_points;

        } catch (err) {
            console.log(err);
        }
    }

    toggle = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                var uid = user.uid;

                ReactChartkick.addAdapter(Chart);

                var ref = "users/" + uid + "/systemData/" + this.state.device + "/sensorData/" + this.state.title + "/allData";
                const dataRef = firebase.database().ref(ref).orderByChild("time").startAt(this.props.graphStart).endAt(this.props.graphEnd);

                if(this.state.modal) {
                    dataRef.once("value", snap => {
                        const data = this.getAllGraphPoints(snap);

                        if (data.length > 0) {
                            this.setState({
                                first: data[0][0],
                                last: data[data.length - 1][0]
                            })
                        }
                        else {
                            var sDate = new Date(this.props.graphStart);
                            var eDate = new Date(this.props.graphEnd);
                            this.setState({
                                first: sDate.toLocaleDateString() + "[" + sDate.getHours() + ":" + ("0" + sDate.getMinutes()).slice(-2) + "]",
                                last: eDate.toLocaleDateString() + "[" + eDate.getHours() + ":" + ("0" + eDate.getMinutes()).slice(-2) + "]"
                            })
                        }

                        this.setState({
                            graphData: data
                        });
                    });
                }
            }
            else{
                // TODO - Ask about this block
            }
        });
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        var date = new Date().toLocaleDateString();
        var gName = "Sensor"+date;

        return (
            <Container>
                <div className="d-flex justify-content-around">
                    <Button id = "toggleBtn" color="info" onClick={this.toggle}>View Graph</Button>
                </div>
                <Modal id = "graphModal" isOpen={this.state.modal} toggle={this.toggle} size="lg">
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
                            <Button id = "toggleBtn2" color="secondary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </Container>
        );
    }
}
export default ModalGraph;
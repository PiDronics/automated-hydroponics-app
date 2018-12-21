import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, MDBContainer, MDBListGroup, MDBListGroupItem, Fa, Badge } from 'mdbreact';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import firebase from "../../fire";

/**
 * @class ModalGraph
 * @desc Displays a graph of all readings of a parameter over the past 24 hours. The graph is displayed in a modal.
 * Parameters are temperature, humidity, etc.
 */
class ModalGraph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            title: props.title,
            device: props.device,
            first: "",
            last: "",
            showComments: false,
            showForm: false,
            errorMessage: "",
            successMsg: "",
            date: new Date().toISOString().substring(0, 23),
            comment: "",
            comments: [],
            user: null
        };

        this.toggle = this.toggle.bind(this);
        this.getModal = this.getModal.bind(this);
        this.toggleComments = this.toggleComments.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.comments = this.comments.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    /**
     * @memberOf ModalGraph
     * @desc gets stored graph data from Firebase and returns an array containing the time and reading
     * @param {DataSnapshot} data_item - Reference to an Object containing data for a single point
     * @return {Array} - Format of returned array [dateAndTime, sensorReading]
     */
    createSinglePoint(data_item) {
        let val = data_item.val();
        let date = new Date(val.time);
        let dateString = date.toLocaleDateString() + "[" + date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2) + "]";
        return [dateString, val.reading];
    }

    /**
     * @memberOf ModalGraph
     * @desc Retrieves all data points for a particular sensor and adds points to an array
     * @param {DataSnapshot} fb_snapshot - Firebase Database reference to all points of a sensor
     * @return {Array} all_points - An array containing all points
     */
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

    /**
     * @memberOf ModalGraph
     * @desc Displays all data from the array of points onto a graph.
     */
    toggle() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                var uid = user.uid;

                ReactChartkick.addAdapter(Chart);

                var ref = "users/"+ uid+ "/systemData/"+ this.state.device+ "/sensorData/" + this.state.title + "/allData";
                const dataRef = firebase.database().ref(ref).orderByChild("time").startAt(this.props.graphStart).endAt(this.props.graphEnd);

                if(this.state.modal) {
                    dataRef.once("value", snap => {
                        console.log(snap.val());
                        const data = this.getAllGraphPoints(snap); // grab all points

                        if (data.length > 0) {
                            this.setState({ // sets the first and the last points
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
        });
        this.setState({
            modal: !this.state.modal
        });
    };

    toggleComments(){
        if(this.state.user){
            var uid = this.state.user.uid;

            var ref = "/users/" + uid + "/systemData/" + this.state.device + "/sensorData/" + this.state.title + "/allComments";
            const dataRef = firebase.database().ref(ref).orderByChild("time").startAt(this.props.graphStart).endAt(this.props.graphEnd);

            var comments = [];

            dataRef.on("value", snap => {
                comments = [];
                snap.forEach((comment) => {
                    var obj = comment.val();
                    obj["id"] = comment.key;
                    comments.push(obj);
                });
                this.setState({
                    comments: comments
                });
            });
        }

        this.setState({
            showComments: !this.state.showComments,
            showForm: false
        });
    }

    deleteComment(e){
        if(window.confirm("Are you sure you want to delete this comment?")){
            firebase.auth().onAuthStateChanged(user => {
                if(user){
                    var uid = user.uid;

                    var ref = "/users/" + uid + "/systemData/" + this.state.device + "/sensorData/" + this.state.title + "/allComments/"+e.comment.id;
                    const dataRef = firebase.database().ref(ref);

                    dataRef.remove().then(() => {
                        this.toggleComments();
                    }
                    ,(error) => {
                        alert("Failed to delete comment." + error.message);
                    });
                }
            });
        }
    }

    comments(){
        if(this.state.showComments){
            return(
                <div className="row">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-around">
                            <div>Comments</div>
                        </div>
                        <MDBContainer>
                            <MDBListGroup className="mh-400px">
                                {this.state.comments && this.state.comments.map(comment => {
                                    var date = new Date(comment.time).toLocaleDateString();
                                    return (
                                        <MDBListGroupItem key={comment.id}>
                                            <div className="d-flex w-100 justify-content-between">
                                                <small className="grey-text">{date}</small>
                                                <Badge onClick={() => this.deleteComment({comment}) } size="sm" color="danger"><Fa icon="close"/></Badge>
                                            </div>
                                            <p className="mb-1 mt-1">{comment.comment}</p>
                                        </MDBListGroupItem>
                                    );
                                })}
                            </MDBListGroup>
                        </MDBContainer>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div/>
            )
        }
    }

    handleChange(e) {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value,
            errorMessage: "",
            successMsg: ""
        });
    };

    handleSubmit(e) {
        e.preventDefault();

        var obj = {};

        obj.date = e.target.date.value;
        obj.comment = e.target.comment.value;

        this.setState({
            ...obj
        });

        var currTime = new Date().getTime();

        if(new Date(this.state.date+"Z").getTime() > currTime){
            this.setState({
                successMsg: "",
                errorMessage: "You cannot add a comment for the future."
            })
        }
        else if(this.state.comment.length===0){
            this.setState({
                successMsg: "",
                errorMessage: "The comment cannot be blank."
            })
        }
        else{
            firebase.auth().onAuthStateChanged(user => {
                if(user) {
                    var uid = user.uid;

                    var newComment = {
                        comment: this.state.comment,
                        time: new Date(this.state.date + "Z").getTime()
                    };

                    const dataRef = firebase.database().ref();

                    dataRef.child("/users/" + uid + "/systemData/" + this.state.device + "/sensorData/" + this.state.title + "/allComments").push(newComment, error => {
                        if (error) {
                            this.setState({
                                successMsg: "",
                                errorMessage: error.message
                            })
                        }
                        else {
                            this.setState({
                                successMsg: "Added successfully!",
                                errorMessage: ""
                            });
                        }
                    });
                }
            });
        }
    };

    toggleForm(){
        this.setState({
            showForm: !this.state.showForm,
            showComments: false
        });
    }

    addComment(){
        if(this.state.showForm){
            return(
                <div className="row">
                    <div className="container-fluid">
                        <form onSubmit={this.handleSubmit} id="commentForm">
                            <div className="container-fluid text-center">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3 mb-2">
                                        <Fa icon="calendar" size="2x"/>
                                        <div className="input-field mb-3">
                                            <label htmlFor="date">Date</label>
                                            <input className="form-control" type="datetime-local" name="date" onChange={this.handleChange.bind(this)} defaultValue={this.state.date}/>
                                        </div>
                                        <div className="input-field mb-3">
                                            <label htmlFor="comment">Comment</label>
                                            <textarea className="form-control" name="comment" placeholder="Enter your comment here." onChange={this.handleChange.bind(this)} defaultValue={this.state.comment}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="red-text d-flex justify-content-center text-center">{this.state.errorMessage}</span>
                            <span className="green-text d-flex justify-content-center text-center">{this.state.successMsg}</span>
                            <div className="input-field d-flex justify-content-around">
                                <button className="btn success-color lighten-1 z-depth-0" id ="add_btn">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div/>
            )
        }
    }

    getModal(){
        var date = new Date().toLocaleDateString();
        var gName = "Sensor"+date;

        if(this.props.graphStart && this.props.graphEnd){
            return(
                <Modal id = "graphModal" isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <ModalHeader toggle={this.toggle}>{this.state.title} Data from {this.state.first} - {this.state.last}</ModalHeader>
                    <ModalBody>
                        <LineChart data={this.state.graphData}
                                   dataset={{pointRadius: 5}}
                                   download={gName}
                                   messages={{empty:"No data available for this range."}}
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
                        {this.comments()}
                        {this.addComment()}
                    </ModalBody>
                    <ModalFooter className="justify-content-around d-flex">
                        <Button id="viewComments" color="info" size="md" onClick={this.toggleComments}>View Comments</Button>
                        <Button id="formComments" color="success" size="md" onClick={this.toggleForm}>New Comment</Button>
                    </ModalFooter>
                    <div className="container-fluid d-flex justify-content-center">
                        <Button id = "toggleBtn2" color="danger" size="md" onClick={this.toggle}>Close</Button>
                    </div>
                </Modal>
            );
        }
        else{
            return(
                <Modal id="graphModal" isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <ModalHeader toggle={this.toggle}>Graph is not configured. Please configure it before viewing the graph.</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <div className="d-flex justify-content-around">
                        <ModalFooter>
                            <Button id = "toggleBtn2" color="secondary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </div>
                </Modal>
            );
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user
            });
        });
    }

    render() {
        return (
            <Container>
                <div className="d-flex justify-content-around">
                    <Button id = "toggleBtn" color="info" onClick={this.toggle}>View Graph</Button>
                </div>
                {this.getModal()}
            </Container>
        );
    }
}
export default ModalGraph;
import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, Fa } from 'mdbreact';
import PropTypes from 'prop-types';

/**
 * @class ModalGraphEdit
 * @desc Responsible for change the configuration of the graph. This allows a user to edit the range of the time
 * interval along with other useful options. Automatically sets to the last 24 hours and previous settings
 */
class ModalGraphEdit extends Component {

    constructor(props) {
        super(props);

        var currDate = new Date();
        var last24hr = new Date(currDate.getTime()-(24 * 3600 * 1000));

        var startArr = (last24hr.getFullYear()+"-"+(last24hr.getMonth()+1)+"-"+last24hr.getDate()).split("-");
        if(startArr[1].length<2){
            startArr[1] = "0"+startArr[1];
        }
        if(startArr[2].length<2){
            startArr[2] = "0"+startArr[2];
        }
        var startDate = startArr.join("-");

        var endArr = (currDate.getFullYear()+"-"+(currDate.getMonth()+1)+"-"+currDate.getDate()).split("-");
        if(endArr[1].length<2){
            endArr[1] = "0"+endArr[1];
        }
        if(endArr[2].length<2){
            endArr[2] = "0"+endArr[2];
        }
        var endDate = endArr.join("-");


        const parsed_date = this.parseDate(currDate);

        this.state = {
            modal: false,
            start: startDate,
            end: endDate,
            startHr: parsed_date.hr,
            startMin: parsed_date.min,
            startPer: parsed_date.per,
            endHr: parsed_date.hr,
            endMin: parsed_date.min,
            endPer: parsed_date.per,
            errorMessage: "",
            successMsg: ""
        };

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * @memberOf ModalGraphEdit
     * @desc Breaks up a Date Object into hours, minutes and AM/PM. The minutes are rounded to the nearest 5
     * @param {Date} current_date - Represents today's date
     * @return {Object} - An object containing hours, minutes and AM/PM
     */
    parseDate(current_date) {
        let period = "am";
        var hr = current_date.getHours();
        if(hr > 12){
            hr = (hr - 12);
            period = "pm";
        }
        hr = hr.toString();
        if(hr.length<2) {
            hr = "0" + hr;
        }

        var min = current_date.getMinutes();
        var min_rounded = (5 * Math.round(min/5)).toString();

        if(min_rounded.length<2){
            min_rounded = "0"+min_rounded;
        }
        return {
            hr: hr,
            min: min_rounded,
            per: period
        }
    }

    /**
     * @memberOf ModalGraphEdit
     * @desc A reverse to the parseDate function; Responsible for taking a date formatted as a string, or number of
     * hours, minutes and AM/PM and returns the appropriate Date Object
     * @param {String} date - Date formatted as a string
     * @param {Number} hr - hour
     * @param {Number} min - minutes
     * @param {String} per - AM/PM
     * @return {Date} - A date Object
     */
    convertToDate(date, hr, min, per){
        if(hr==null || min==null || per==null){
            return (new Date(date));
        }

        if(parseInt(min)>=60){
            min = 0;

            if(parseInt(hr)===11 && per==="pm"){
                hr=0;
                per="am";
            }
            else{
                hr=parseInt(hr)+1;
            }
        }

        if(per==="am"){
            if(parseInt(hr)===12){
                hr=0;
            }
        }
        else if(per==="pm"){
            if(hr<12){
                hr=parseInt(hr)+12;
            }
        }

        hr = hr.toString();
        min = min.toString();
        var newHr = hr;

        if(newHr.length<2){
            newHr = "0"+newHr;
        }

        if(min.length<2){
            min = "0"+min;
        }

        return new Date(date+"T"+newHr+":"+min+":00");
    }

    /**
     * @memberOf ModalGraphEdit
     * @desc Responsible for opening and closing the Modal window
     */
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    };

    /**
     * @memberOf ModalGraphEdit
     * @desc Updates state based on user input.
     * @param {Event} e - A keypress event or the update of the dropdown menu
     */
    handleChange(e) {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value,
            errorMessage: "",
            successMsg: ""
        });
    };

    /**
     * @memberOf ModalGraphEdit
     * @desc Saves display configuration for the Modal Graph
     * @param {Event} e - The Submit event
     */
    handleSubmit(e) {
        e.preventDefault();

        var obj = {};

        obj.start = e.target.start.value;
        obj.end = e.target.end.value;
        obj.startHr = e.target.startHr.value;
        obj.endHr = e.target.endHr.value;
        obj.startMin = e.target.startMin.value;
        obj.endMin = e.target.endMin.value;
        obj.startPer = e.target.startPer.value;
        obj.endPer = e.target.endPer.value;

        this.setState({
            ...obj
        });

        var values = this.checkValues();
        if(values !== false){
            this.props.callback(values);
        }
    };

    /**
     * @memberOf ModalGraphEdit
     * @desc Responsible for validating all inputs made by the user. Displays the appropriate error message if bad
     * data is given
     * @return {*} - If settings are valid, returns an Object with the start and end date. If settings are invalid,
     * returns false.
     */
    checkValues() {
        var startFullDate = this.convertToDate(this.state.start, this.state.startHr, this.state.startMin, this.state.startPer);
        var endFullDate = this.convertToDate(this.state.end, this.state.endHr, this.state.endMin, this.state.endPer);
        // TODO - Throw exceptions for developers, throw snackbar or side modal for users
        if(startFullDate > new Date()){
            this.setState({
                errorMessage: "The start date cannot be in the future.",
                successMsg: ""
            });
        }
        else if(startFullDate > endFullDate){
            this.setState({
                errorMessage: "The starting date and time cannot be later than the end date and time.",
                successMsg: ""
            });
        }
        else if(startFullDate.getTime() === endFullDate.getTime()){
            this.setState({
                errorMessage: "The start and end dates and times cannot be the same.",
                successMsg: ""
            });
        }
        else{
            this.setState({
                errorMessage: "",
                successMsg: "Settings are valid!"
            });
            return {start: startFullDate.getTime(), end: endFullDate.getTime()};
        }
        return false;
    };

    componentDidMount(){
        var values = this.checkValues();
        if(values !== false){
            this.props.callback(values);
        }
    }

    render() {
        const bgGreen = {backgroundColor: '#35a56f'}
        return (
            <Container>
                <div className="d-flex justify-content-around">
                    <Button style={bgGreen} className= "btn lighten-1" onClick={this.toggle}>Select Range</Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <ModalHeader toggle={this.toggle}>Select Range</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit} id="graphValues">
                            <div className="container-fluid text-center">
                                <div className="row">
                                    <div className="col-lg-6 mb-2">
                                        <Fa icon="calendar" size="2x"/>
                                        <div className="input-field mb-3">
                                            <label htmlFor="start">Start Date</label>
                                            <input className="form-control" type="date" name="start" onChange={this.handleChange.bind(this)} defaultValue={this.state.start}/>
                                        </div>
                                        <div className="input-field mb-3">
                                            <label htmlFor="end">End Date</label>
                                            <input className="form-control" type="date" name="end" onChange={this.handleChange.bind(this)} defaultValue={this.state.end}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-2">
                                        <Fa icon="clock-o" size="2x"/>
                                        <div className="input-field mb-3">
                                            <label htmlFor="sTime">Start Time</label>
                                            <div className="d-flex justify-content-start">
                                                <select className="form-control" name="startHr" onChange={this.handleChange.bind(this)} defaultValue={this.state.startHr}>
                                                    <option value="01">1</option>
                                                    <option value="02">2</option>
                                                    <option value="03">3</option>
                                                    <option value="04">4</option>
                                                    <option value="05">5</option>
                                                    <option value="06">6</option>
                                                    <option value="07">7</option>
                                                    <option value="08">8</option>
                                                    <option value="09">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                                <select className="form-control" name="startMin" onChange={this.handleChange.bind(this)} defaultValue={this.state.startMin}>
                                                    <option value="0">00</option>
                                                    <option value="5">05</option>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                    <option value="20">20</option>
                                                    <option value="25">25</option>
                                                    <option value="30">30</option>
                                                    <option value="35">35</option>
                                                    <option value="40">40</option>
                                                    <option value="45">45</option>
                                                    <option value="50">50</option>
                                                    <option value="55">55</option>
                                                </select>
                                                <select className="form-control" name="startPer" onChange={this.handleChange.bind(this)} defaultValue={this.state.startPer}>
                                                    <option value="am">A.M.</option>
                                                    <option value="pm">P.M.</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="input-field mb-3">
                                            <label htmlFor="eTime">End Time</label>
                                            <div className="d-flex justify-content-start">
                                                <select className="form-control" name="endHr" onChange={this.handleChange.bind(this)} defaultValue={this.state.endHr}>
                                                    <option value="01">1</option>
                                                    <option value="02">2</option>
                                                    <option value="03">3</option>
                                                    <option value="04">4</option>
                                                    <option value="05">5</option>
                                                    <option value="06">6</option>
                                                    <option value="07">7</option>
                                                    <option value="08">8</option>
                                                    <option value="09">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                                <select className="form-control" name="endMin" onChange={this.handleChange.bind(this)} defaultValue={this.state.endMin}>
                                                    <option value="00">00</option>
                                                    <option value="05">05</option>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                    <option value="20">20</option>
                                                    <option value="25">25</option>
                                                    <option value="30">30</option>
                                                    <option value="35">35</option>
                                                    <option value="40">40</option>
                                                    <option value="45">45</option>
                                                    <option value="50">50</option>
                                                    <option value="55">55</option>
                                                </select>
                                                <select className="form-control" name="endPer" onChange={this.handleChange.bind(this)} defaultValue={this.state.endPer}>
                                                    <option value="am">A.M.</option>
                                                    <option value="pm">P.M.</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="red-text d-flex justify-content-center text-center">{this.state.errorMessage}</span>
                            <span className="green-text d-flex justify-content-center text-center">{this.state.successMsg}</span>
                            <div className="input-field d-flex justify-content-around">
                                <button className="btn success-color lighten-1 z-depth-0" id ="signup_btn">Save</button>
                            </div>
                        </form>
                    </ModalBody>
                    <div className="d-flex justify-content-around">
                        <ModalFooter>
                            <Button color="danger" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </Container>
        );
    }
}

ModalGraphEdit.protoTypes = {
    callback : PropTypes.func,
};

export default ModalGraphEdit;

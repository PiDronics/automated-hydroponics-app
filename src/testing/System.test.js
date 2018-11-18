import React from 'react';
import { shallow } from 'enzyme';
import System from "../components/system/System";
import firebase from '../fire';

// TODO - Check out firebase-nightlight here: https://npm.taobao.org/package/firebase-nightlight

const mockData = require('./model');
const mockSensor = mockData.systems.users.user1.systemCard["pi-1"].sensors.Humidity;
const mockSensorList = [];


Object.keys(mockData.sensorList).forEach((name) => {
    let obj = {...mockSensor, sensorName: name};
    mockSensorList.push(obj);
});

const props = {
    match: {
        params: {
            id: 1
        }
    },
    history: []
};

describe('System Component UI', () => {
    let shallow_render, instance;

    beforeAll(() => {
        shallow_render = shallow(<System {...props} />); // Render full UI
        instance = shallow_render.instance(); // Instantiate class to get methods
        // console.log(shallow_render.debug()); // Show full UI in test window

        firebase.auth().onAuthStateChanged = jest.fn((data) => { // Mocking firebase auth
            instance.setState({
                user: data
            });
        });

    });

    // Unit tests start here

    it('-> should render without throwing errors', () => {
        expect(shallow_render.find('.container-fluid').exists()).toBe(true);
    });

    it('-> should display the proper information from state', () => {
        instance.setState({
            lastUpdated: "today",
            systemName: "My System",
        });

        expect(shallow_render.find("#lastUpdated").text()).toEqual("today");
        expect(shallow_render.find('#systemName').text()).toEqual("My System");
        expect(shallow_render.state('sensors').length).toEqual(0);
    });

    it('-> should display the list of Sensors on the page', () => {
        instance.setState({
            sensors: mockSensorList
        });

        shallow_render.update();
        // console.log(shallow_render.debug());
        expect(shallow_render.find('#sensorList').children().length).toEqual(5);
    })
});

describe('System Component functions', () => {
    let shallow_render;

    beforeAll(() => {
        shallow_render = shallow(<System {...props} />);
    });


});
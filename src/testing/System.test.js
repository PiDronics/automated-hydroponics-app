import React from 'react';
import { shallow } from 'enzyme';
import System from "../components/system/System";
import firebase from '../fire';

// Pulling mock data from ./model.json to aid in testing
const mockData = require('./model');
const mockSensor = mockData.systems.users.user1.systemCard["pi-1"].sensors.Humidity;
const mockSensorList = [];

// Preparing test data
Object.keys(mockData.sensorList).forEach((name) => {
    let obj = {...mockSensor, sensorName: name};
    mockSensorList.push(obj);
});

// Preparing props
const props = {
    match: {
        params: {
            id: 1
        }
    },
    history: []
};

/*
    - Testing whether or not components rendered properly
    - Testing if the UI is updated when a list of sensors is added after the page
    has been created (last test)
 */
describe('System Component UI', () => {
    let shallow_render, instance;

    beforeAll(() => {
        shallow_render = shallow(<System {...props} />); // Render full UI
        instance = shallow_render.instance(); // Instantiate class to get methods

        firebase.auth().onAuthStateChanged = jest.fn((data) => { // Mocking firebase auth
            instance.setState({
                user: data
            });
        });

    });

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
        expect(shallow_render.find('#sensorList').children().length).toEqual(5);
    })
});
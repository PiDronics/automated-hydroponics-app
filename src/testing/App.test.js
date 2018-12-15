import React from 'react';
import { shallow } from 'enzyme'
import firebase from '../fire';
import App from "../App";

/*
    - Checks for all important UI details for this component
    - Also checks for proper functionality when the Auth state changes
 */
describe("App Component", () => {
    let shallow_render;

    beforeAll(() => {
        shallow_render = shallow(<App/>);
        firebase.auth().onAuthStateChanged = jest.fn((data) => {
            shallow_render.instance().setState({
                'user': data
            });
        });
    });


    it('-> should render without any errors', () => {
        expect(shallow_render.find('.App').exists()).toBe(true);
        expect(shallow_render.find('Route').length).toEqual(6);
    });

    it('-> should have an initial user state of null', () => {
        expect(shallow_render.state('user')).toBe(null);
    });

    it('-> should update the state when a new user has been detected', () => {
        firebase.auth().onAuthStateChanged({name: 'Qarun'});
        expect(shallow_render.state('user')).not.toBe(null);
    });

});
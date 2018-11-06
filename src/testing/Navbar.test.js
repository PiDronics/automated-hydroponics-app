import React from 'react';
import { shallow } from 'enzyme';
import NavbarFeatures from "../components/layout/Navbar";
import firebase from '../fire';



describe("Navbar Component", () => {
    let shallow_render;

    beforeAll(() => {
        shallow_render = shallow(<NavbarFeatures/>);

        firebase.auth().onAuthStateChanged = jest.fn((data) => {
            shallow_render.instance().setState({
                'user': data
            });
        });


    });

    it('-> should render on the screen without errors', () => {
        expect(shallow_render.find('t').exists()).toBe(true);
    });

    it('-> should change the state upon clicking a button', () => {
        const button = shallow_render.find('#toggleBtn');
        expect(shallow_render.state('collapse')).toBe(false);
        button.simulate('click');
        expect(shallow_render.state('collapse')).toBe(true);
        button.simulate('click');
        expect(shallow_render.state('collapse')).toBe(false);
    });

    it('-> should render the appropriate UI when a user is logged on', () => {
        firebase.auth().onAuthStateChanged(null);
        expect(shallow_render.state('user')).toBe(null);
        shallow_render.update();
        expect(shallow_render.find('#userNotFound').exists()).toBe(true);

        firebase.auth().onAuthStateChanged({name: 'Qarun'});
        expect(shallow_render.state('user')).not.toBe(null);
        shallow_render.update();
        expect(shallow_render.find('#userFound').exists()).toBe(true);
    })
});
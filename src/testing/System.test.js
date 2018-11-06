import React from 'react';
import { mount } from 'enzyme';
import System from "../components/system/System";
import firebase from '../fire';

describe('System Component', () => {
    let shallow_render;
    let props = {
        match: {
            params: {
                id: 1
            }
        },
        history: []
    };

    beforeAll(() => {
        shallow_render = mount(<System {...props} />);
        firebase.auth().onAuthStateChanged = jest.fn((data) => {
            shallow_render.instance().setState({
                user: data
            });
        });

    });

    it('-> should render without throwing errors', () => {
        expect(shallow_render.find('.container-fluid').exists()).toBe(true);
    });
});
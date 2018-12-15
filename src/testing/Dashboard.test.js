import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../components/dashboard/Dashboard';
const mockData = require('./model');

/*
    UI TESTS
    - Testing for rendering on the screen
    - Testing for 3 container-fluid classes
    - Testing for at least 2 row classes
    - Supply mock system data and see if more rows are generated
    - Testing for the text in h2
 */
describe('Dashboard Component', () => {
    let shallow_render;

    beforeEach(() => {
        shallow_render = shallow(<Dashboard/>);
    });

    it('-> should render on the screen without throwing an error', () => {
        expect(shallow_render.find('div.container-fluid').exists()).toBe(true);
    });

    it('-> should contain at least 2 row classes', () => {
        expect(shallow_render.find('.row').length).toBeGreaterThan(1);
    });

    it('-> should render with the proper text in the heading', () => {
        expect(shallow_render.find('h2').exists()).toBe(true);
        let h2Header = shallow_render.find('h2').get(0);
        expect(h2Header.props.children).toBe('PiDronics Monitoring System');

        h2Header = shallow_render.find('h2').get(1);
        expect(h2Header.props.children).toBe('Systems');
    });

    it('-> should test if SystemCards are generated if more "systems" are added to the state', () => {
        expect(shallow_render.find("SystemCard").length).toBe(0);

        const systems = [];
        const mockSystem = {};
        Object.assign(mockSystem, mockData.systems.users.user1.systemCard["pi-1"]);
        mockSystem['systemId'] = "something";
        systems.push(mockSystem);
        systems.push(mockSystem);
        systems.push(mockSystem);
        systems.push(mockSystem);

        shallow_render.setState({'systems': systems});
        shallow_render.update();
        expect(shallow_render.find("SystemCard").length).toBe(4);
    });

});
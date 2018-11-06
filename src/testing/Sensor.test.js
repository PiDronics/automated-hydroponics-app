import React from 'react';
import { shallow } from 'enzyme';
import Sensor from '../components/sensor/Sensor';

describe('Sensor Component', () => {
    let shallow_render;

    beforeEach(() => {
        shallow_render = shallow(<Sensor/>);
    });

    it('-> should render without throwing any errors', () => {
        expect(shallow_render.find('.col-lg-6').exists()).toBe(true);
    });

    it('-> should render all other UI elements properly', () => {
        expect(shallow_render.find('tr').length).toEqual(4);
        expect(shallow_render.find('.justify-content-center').exists()).toBe(true);
    });

    it('-> should display all props on screen', () => {
        let props = {
            sensorName: true,
            key: "",
            min: 25,
            max: {},
            avg: "5",
            current: "7",
            device: "test123"
        };

        shallow_render = shallow(<Sensor {...props} />);
        expect(shallow_render.find('#current').text()).toEqual(props.current);
        expect(shallow_render.find('#avg').text()).toEqual(props.avg);
    })
});

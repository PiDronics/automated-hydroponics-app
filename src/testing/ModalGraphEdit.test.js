import React from 'react';
import { shallow } from 'enzyme';
import ModalGraphEdit from "../components/modal/ModalGraphEdit";

const props = {
    callback: (values) => {
        console.log(values);
    }
};

const createMockEvent = (name, value) => {
    return {
        preventDefault: () => { console.log('Default behaviour prevented...'); },
        target: {
            name: name,
            value: value
        }
    };
};

describe('ModalGraphEdit component UI', () => {
    let shallow_render;

    beforeAll(() => {
        shallow_render = shallow(<ModalGraphEdit {...props} />);
    });

    it('-> should render without throwing an error', () => {
        expect(shallow_render.find('.justify-content-around').exists()).toBe(true);
    });

});

describe('ModalGraphEdit component functions', () => {
    let shallow_render, instance;

    beforeAll(() => {
        shallow_render = shallow(<ModalGraphEdit {...props} />);
        instance = shallow_render.instance();
    });

    it('-> convertToDate works with expected input', () => {
        let result = instance.convertToDate("December 12, 2018 12:05:00", null, null, null);
        expect(result).toEqual(new Date("December 12, 2018 12:05:00"));

        result = instance.convertToDate("December 12, 2018 12:05:00", undefined, undefined, undefined);
        expect(result).toEqual(new Date("December 12, 2018 12:05:00"));

        result = instance.convertToDate("December 12, 2018 12:05:00");
        expect(result).toEqual(new Date("December 12, 2018 12:05:00"));

    });

    it('-> toggle works', () => {
        expect(shallow_render.state('modal')).toBe(false);
        instance.toggle();
        expect(shallow_render.state('modal')).toBe(true);
        instance.toggle();
        expect(shallow_render.state('modal')).toBe(false);
    });

    it('-> handleChange changes state ', () => {
        expect(shallow_render.state('qarun')).toBe(undefined);
        instance.handleChange(
            createMockEvent('qarun', 'My name is Qarun')
        );

        expect(shallow_render.state('qarun')).toBeDefined();
        expect(shallow_render.state('qarun')).toEqual('My name is Qarun');
        expect(shallow_render.state('errorMessage')).toEqual("");
        expect(shallow_render.state('successMsg')).toEqual("");
    });
});
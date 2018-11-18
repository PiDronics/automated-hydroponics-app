import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ModalGraph from "../components/modal/ModalGraph";

describe("ModalGraph Component UI", () => {
    let shallow_render, instance;

    beforeAll(() => {
        shallow_render = shallow(<ModalGraph/>);
        instance = shallow_render.instance();
    });

    it('-> should render properly without throwing an error', () => {
        // console.log(shallow_render.debug());
        expect(shallow_render.find('.justify-content-around').exists()).toBe(true);
    });
    //
    // it('-> should reveal the modal on clicking the button', () => {
    //     const button = shallow_render.find('#toggleBtn');
    //     const button2 = shallow_render.find('#toggleBtn2');
    //     const modal = shallow_render.find('#graphModal');
    //
    //     expect(modal.prop('isOpen')).toBe(false);
    //     expect(button2.exists()).toBe(true);
    //
    //     const spy = sinon.spy(instance, 'toggle');
    //     button.simulate('click');
    //     expect(spy.calledOnce).toBe(true);
    // });
});
//
// describe("ModalGraph Component functions", () => {
//     let shallow_render, instance;
//
//     beforeAll(() => {
//         shallow_render = shallow(<ModalGraph/>);
//         instance = shallow_render.instance();
//     });
//
//
// });
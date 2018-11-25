import React from 'react';
import { shallow } from 'enzyme';
import ModalConfig from "../components/modal/ModalConfig";

const mockEvent = () => { console.log('Default Behaviour Prevented...'); };

describe('ModalConfig UI Tests -> ', () => {
    let shallow_render;
    let toggleModalSpy, onChangeSpy, deleteSpy;

    beforeAll(() => {
        toggleModalSpy = jest.spyOn(ModalConfig.prototype, 'toggle');
        onChangeSpy = jest.spyOn(ModalConfig.prototype, 'handleChange');
        deleteSpy = jest.spyOn(ModalConfig.prototype, 'deleteSystem');
    });

    beforeEach(() => {
        shallow_render = shallow(<ModalConfig/>);
    });

    it('-> should render without throwing an error', () => {
        expect(shallow_render.find('.justify-content-around').exists()).toBe(true);
    });

    it('-> should call toggle() when button is pressed', () => {
        const button = shallow_render.find('#toggleModal');
        button.simulate('click');

        expect(toggleModalSpy).toHaveBeenCalled();
    });

    it('-> should call handleChange() when updating input fields', () => {
        const nameInput = shallow_render.find('#name');
        nameInput.simulate('change', {
            preventDefault: mockEvent,
            target: { value: 'This is a unit test' }
        });
        expect(onChangeSpy).toHaveBeenCalled();

        const timeInput = shallow_render.find('#time');
        timeInput.simulate('change', {
            preventDefault: mockEvent,
            target: { value: 'This is a unit test' }
        });
        expect(onChangeSpy).toHaveBeenCalled();
    });

    it('-> should call deleteSystem() when the "Delete System" button is pressed', () => {
        const deleteBtn = shallow_render.find('#delete_btn');
        deleteBtn.simulate('click', {
            preventDefault: mockEvent,
        });

        expect(deleteSpy).toHaveBeenCalled();
    });
});

describe('ModalConfig function logic', () => {
   let shallow_render;

   beforeEach(() => {
       shallow_render = shallow(<ModalConfig/>);
   });

   it('-> toggle() should change the state when called', () => {
       expect(shallow_render.state('modal')).toBe(false);
       const instance = shallow_render.instance();
       instance.toggle();
       expect(shallow_render.state('modal')).toBe(true);
       instance.toggle();
       expect(shallow_render.state('modal')).toBe(false);
   });


});
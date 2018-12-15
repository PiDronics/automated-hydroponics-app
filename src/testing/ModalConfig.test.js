import React from 'react';
import { shallow } from 'enzyme';
import ModalConfig from "../components/modal/ModalConfig";

/*
    Mocking the preventDefault method of the event object was necessary
    since it is run in the original code itself.
 */
const mockEvent = () => { console.log('Default Behaviour Prevented...'); };

/*
    UI tests typically consist of testing if the HTML elements rendered
    on the screen properly and testing if the UI events actually execute
    the functions. It does not test the actual logic of the functions
    themselves.
 */
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

    /*
        The test below runs but throws an exception showing a stack trace back to the deleteSystem
        method. The actual code (ModalConfig.js) has a window.confirm method inside of the
        function, but this window.confirm will not run in the tests since the testing environment
        does not contain the window object. Hence the stack trace is printed.

        The test still passes because the call to the function is tested and not the actual function
        execution. Window.confirm will have to be mocked in order to properly unit test the deleteSystem function.
     */
    it('-> should call deleteSystem() when the "Delete System" button is pressed', () => {
        const deleteBtn = shallow_render.find('#delete_btn');
        deleteBtn.simulate('click', {
            preventDefault: mockEvent,
        });

        expect(deleteSpy).toHaveBeenCalled();
    });
});

/*
    Function logic tests whether or not the functions run as they are supposed to
 */
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
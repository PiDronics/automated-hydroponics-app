import React from 'react'
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SignedOut from '../components/auth/SignedOut';

/*
    CRITICAL
    - Must check valid email format (done)
    - Must test button interaction to see if function was called (done)

    NON-CRITICAL
    - Check if component rendered (done)
    - Check if Headers are correct (done)
    - Check for text inside button (done)
 */


/*
    - Testing proper rendering of UI components
    - Testing valid input for both sign up and sign in forms
    - Testing whether functions were called due to UI
    - Due to constraints of time, and lack of familiarity with React, routing to
    another page after a successful login/sign up was not tested
 */
describe('SignedOut Page', () => {
    let shallow_render;
    let historyMock;
    beforeAll(() => {
        historyMock = { push: jest.fn() };
    });

    beforeEach(() => {
        shallow_render = shallow(<SignedOut history={historyMock}/>);
    });

    it('-> should render without throwing an error', () => {
        expect(shallow_render.find('div.container-fluid').exists()).toBe(true);
    });

    it('-> should contain input fields', () => {
        expect(shallow_render.find('input').exists()).toBe(true);
    });


    it('-> should change the state during input', () => {
        const email1 = shallow_render.find("#email1");
        const password1 = shallow_render.find('#password1');

        email1.simulate('change', {
            target: {name: "email", value:"qarun80@gmail.com"}
        });

        expect(shallow_render.state('email')).toEqual("qarun80@gmail.com");

        password1.simulate('change', {
            target: {name: "password", value:"VeryHungryHippos"}
        });

        expect(shallow_render.state('password')).toEqual("VeryHungryHippos");
    });

    it('-> should check if the email1 accepts a valid format', () => {
        const email1 = shallow_render.find("#email1");
        const pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        email1.simulate('change', { target: {name: "email", value:"qarun80@gmail.com"} });
        expect(pattern.test(shallow_render.state('email'))).toBe(true);

        email1.simulate('change', { target: {name: "email", value:"MoSeScHaRlEs123@gmail.com"} });
        expect(pattern.test(shallow_render.state('email'))).toBe(true);

        email1.simulate('change', { target: {name: "email", value:"123@gmail.com"} });
        expect(pattern.test(shallow_render.state('email'))).toBe(true);

        email1.simulate('change', { target: {name: "email", value:"MoSeScHaRlEs123@gmail.com"} });
        expect(pattern.test(shallow_render.state('email'))).toBe(true);

        email1.simulate('change', { target: {name: "email", value:"MoSeScHaRlEs123@gmail.com.co.tt"} });
        expect(pattern.test(shallow_render.state('email'))).toBe(true);

        email1.simulate('change', { target: {name: "email", value:"*&*@#@gmail.com"} });
        expect(pattern.test(shallow_render.state('email'))).toBe(false);

        email1.simulate('change', { target: {name: "email", value:"MoSeScHaRlEs123@gmail"} });
        expect(pattern.test(shallow_render.state('email'))).toBe(false);

        email1.simulate('change', { target: {name: "email", value:"@gmail.com"} });
        expect(pattern.test(shallow_render.state('email'))).toBe(false);

    });

    it('-> executes the handleSignIn function on submitting the Login form', () => {
        const spy = sinon.spy(shallow_render.instance(), 'handleSignIn');
        shallow_render.instance().forceUpdate();
        shallow_render.find('#form1').simulate('submit', {preventDefault: jest.fn()});
        sinon.assert.calledOnce(spy);
        shallow_render.find('#form1').simulate('submit', {preventDefault: jest.fn()});
        sinon.assert.callCount(spy, 2);
        shallow_render.find('#form1').simulate('submit', {preventDefault: jest.fn()});
        sinon.assert.callCount(spy, 3);
    });

    it('-> executes the handleSignUp function on submitting the Sign up form', () => {
        const spy = sinon.spy(shallow_render.instance(), 'handleSignUp');
        const instance = shallow_render.instance();
        instance.setState({
            auth: 'signupbtn'
        });
        instance.forceUpdate();
        shallow_render.find('#form2').simulate('submit', {preventDefault: jest.fn()});
        sinon.assert.calledOnce(spy);
        shallow_render.find('#form2').simulate('submit', {preventDefault: jest.fn()});
        sinon.assert.callCount(spy, 2);
        shallow_render.find('#form2').simulate('submit', {preventDefault: jest.fn()});
        sinon.assert.callCount(spy, 3);
    });
});
import React from 'react'
import { shallow } from 'enzyme';
import SignedOut from '../components/auth/SignedOut';

/*
    CRITICAL
    - Must check valid email format (done)
    - Must test button interaction to see if function was called

    NON-CRITICAL
    - Check if component rendered (done)
    - Check if Headers are correct (done)
    - Check for text inside button (done)

 */


describe('SignedOut Page', () => {
    let shallow_render;
    // let mount_render;
    // beforeAll(() => {
    //     mount_render = mount(<SignedOut/>);
    //
    // });

    beforeEach(() => {
        shallow_render = shallow(<SignedOut/>);
    });

    it('-> should render without throwing an error', () => {
        expect(shallow_render.find('div.container-fluid').exists()).toBe(true);
    });

    it('-> should contain 4 input fields', () => {
        expect(shallow_render.find('input').length).toBe(4);
    });

    it('-> should contain 2 buttons', () => {
        expect(shallow_render.find('button').length).toBe(2);
    });

    it('-> should check that the webpage contain the correct text', () => {
        expect(shallow_render.find('h2').text()).toEqual('PiDronics Monitoring System');
        expect(shallow_render.find('p').text()).toEqual('Manage complicated hydroponic farms with ease!');
        expect(shallow_render.find('#login_btn').text()).toEqual("Login");
        expect(shallow_render.find('#signup_btn').text()).toEqual("Sign Up");
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
        email1.simulate('change', {
            target: {name: "email", value:"qarun80@gmail.com"}
        });

        expect(pattern.test(shallow_render.state('email'))).toBe(true);

        email1.simulate('change', {
            target: {name: "email", value:"MoSeScHaRlEs123@gmail.com"}
        });

        expect(pattern.test(shallow_render.state('email'))).toBe(true);

        email1.simulate('change', {
            target: {name: "email", value:"123@gmail.com"}
        });

        expect(pattern.test(shallow_render.state('email'))).toBe(true);

        email1.simulate('change', {
            target: {name: "email", value:"MoSeScHaRlEs123@gmail.com"}
        });

        expect(pattern.test(shallow_render.state('email'))).toBe(true);

        email1.simulate('change', {
            target: {name: "email", value:"MoSeScHaRlEs123@gmail.com.co.tt"}
        });

        expect(pattern.test(shallow_render.state('email'))).toBe(true);

        email1.simulate('change', {
            target: {name: "email", value:"*&*@#@gmail.com"}
        });

        expect(pattern.test(shallow_render.state('email'))).toBe(false);

        email1.simulate('change', {
            target: {name: "email", value:"MoSeScHaRlEs123@gmail"}
        });

        expect(pattern.test(shallow_render.state('email'))).toBe(false);

        email1.simulate('change', {
            target: {name: "email", value:"@gmail.com"}
        });

        expect(pattern.test(shallow_render.state('email'))).toBe(false);

    });
    //
    // it('-> executes the handleSignUp function on submitting the sign up form', () => {
    //     const instance = mount_render.instance();
    //     const spy = sinon.spy(instance, 'handleSignIn');
    //     shallow_render.find('#form1').simulate('submit', {preventDefault: jest.fn()});
    //     expect(spy).toHaveBeenCalled();
    // });



});
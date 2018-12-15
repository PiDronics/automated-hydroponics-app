import React from 'react';
import { shallow } from 'enzyme';
import ModalGraph from "../components/modal/ModalGraph";

/*
    Due to limited knowledge of working with Material Design Bootstrap Library,
    much of the UI could not have been tested.
 */
describe("ModalGraph Component UI", () => {
    let shallow_render;

    beforeAll(() => {
        shallow_render = shallow(<ModalGraph/>);
    });

    it('-> should render properly without throwing an error', () => {
        expect(shallow_render.find('.justify-content-around').exists()).toBe(true);
    });
});

import React from 'react';
import SensorCard from "./SensorCard";
import {shallow} from "enzyme";

describe('Sensorcard component should: ', () => {
    let wrapper;

    it('exist', () => {
        wrapper = shallow(<SensorCard />);
        expect(wrapper.exists()).toBe(true);
        console.log(wrapper.debug());
    })

});
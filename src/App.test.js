import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ToolbarTop from './ToolbarTop/ToolbarTop';
import SensorCard from './SensorCard/SensorCard';

describe('Testing App Component', () => {
    let app_wrapper;

    beforeEach(() => {
        app_wrapper = shallow(<App />)
    });

    it('renders the App wrapper', () => {
        expect(app_wrapper.exists()).toBe(true);
    });

    it('renders a toolbar in the App component', () => {
        expect(app_wrapper.contains(<ToolbarTop />)).toBe(true);
    });

    it('should not render a table on startup', () => {
        expect(app_wrapper.contains(<SensorCard />)).toBe(false);
    });


});




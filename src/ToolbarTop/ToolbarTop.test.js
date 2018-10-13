import React from 'react';
import { shallow } from 'enzyme';
import ToolbarTop from './ToolbarTop';
import Typography from '@material-ui/core/Typography';

describe('Testing Toolbar on top of page', () => {
    let toolbar;

    beforeEach(() => {
        toolbar = shallow(<ToolbarTop />)
    });

    it('should render on the page', () => {
        expect(toolbar.exists()).toBe(true);
    });

    it('should contain the appropriate title', () => {
        toolbar.contains(<Typography>PiDronics Monitoring System</Typography>)
    });
});
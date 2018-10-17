import React from 'react';
import {mount} from 'enzyme';
import ToolbarTop from './ToolbarTop';
import IconButton from "@material-ui/core/IconButton/IconButton";

describe('Testing Toolbar on top of page', () => {
    let toolbar;

    beforeEach(() => {
        toolbar = mount(<ToolbarTop />)
    });

    it('should render on the page', () => {
        expect(toolbar.exists()).toBe(true);
    });

    it('should contain an icon button', () => {
       let button = toolbar.find(IconButton);
       expect(button.exists()).toBe(true);
    });


});
import React from "react";
import {CheckboxText} from "./CheckboxText";
import Enzyme, {
    mount,
    shallow,
} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';


describe('CheckboxText component', () =>{
    test('checkbox must be worked', () =>{
        const wrapper = shallow(<CheckboxText />)
    })
})

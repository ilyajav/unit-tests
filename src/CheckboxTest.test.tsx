import React from "react";
import {CheckboxText} from "./CheckboxText";
import Enzyme, {
    shallow,
} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('CheckboxText component', () =>{
    test('checkbox must be worked', () =>{
        // компонент обертка
        const wrapper = shallow(<CheckboxText />);
        // находим checkbox
        const checkbox = wrapper.find('input[type="checkbox"]');
        // проверка на количество checkboxes
        expect(checkbox.length).toEqual(1);
        // проверка флага
        expect(checkbox.props().checked).toBe(false);
        // проверка текста в компоненте
        expect(wrapper.text()).toEqual('');
        // эмулируем событие "change" по checkbox с флагом true
         checkbox.simulate('change', {currentTarget: {checked: true}});
         // проверка флага
        expect(wrapper.find('input[type="checkbox"]').props().checked).toBe(true);
         //  проверка текста в компоненте
        expect(wrapper.text()).toEqual('Тестирование checkbox с помощью enzyme');
        // эмулируем событие "change" по checkbox с флагом false
        checkbox.simulate('change', {currentTarget: {checked: false}});
        // проверка флага
        expect(wrapper.find('input[type="checkbox"]').props().checked).toBe(false);
        // проверка текста в компоненте
        expect(wrapper.text()).toEqual('');
    })
})

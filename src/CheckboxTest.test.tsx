import React from "react";
import {CheckboxText} from "./CheckboxText";
import Enzyme, {
    render,
    shallow,
    mount,
} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
//import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import {CheckboxTextMount} from "./for-mount/CheckboxTestMount";
import {Input} from "./for-mount/text";

Enzyme.configure({adapter: new Adapter()});

describe('CheckboxText component', () =>{
    test('checkbox must be worked with shallow', () =>{
        // компонент обертка
        const wrapper = shallow(<CheckboxText />);
        // snapshot
        //expect(wrapper).toMatchSnapshot();
        // находим checkbox
        const checkbox = wrapper.find('input[type="checkbox"]');
        // проверка на количество checkboxes
        expect(checkbox.length).toEqual(1);
        // проверка флага
        expect(checkbox.props().checked).toBe(false);
        // проверка текста в компоненте
        expect(wrapper.text()).toEqual('Test');
        // эмулируем событие "change" по checkbox с флагом true
         checkbox.simulate('change', {currentTarget: {checked: true}});
         // проверка флага
        expect(wrapper.find('input[type="checkbox"]').props().checked).toBe(true);
         //  проверка текста в компоненте
        expect(wrapper.text()).toEqual('TestТестирование checkbox с помощью enzyme');
        // эмулируем событие "change" по checkbox с флагом false
        checkbox.simulate('change', {currentTarget: {checked: false}});
        // проверка флага
        expect(wrapper.find('input[type="checkbox"]').props().checked).toBe(false);
        // проверка текста в компоненте
        expect(wrapper.text()).toEqual('Test');
    })
    test('render', () =>{
        // рендер статики
        const wrapper = render(<CheckboxText />);
        // находим checkbox
        const checkbox = wrapper.find('input[type="checkbox"]').length;
        // провекра длины
        expect(checkbox).toBe(1);
        // snapshot
        expect(wrapper).toMatchSnapshot();
    })
    test('render 2', () =>{
        // рендер статики
        const wrapper = render(<CheckboxTextMount />);
        // находим checkbox
        const checkbox = wrapper.find('input[type="checkbox"]').length;
        const paragraph = wrapper.find('p').length;
        // провекра длины
        expect(checkbox).toBe(1);
        expect(paragraph).toBe(2)
        // snapshot
        // expect(wrapper).toMatchSnapshot();
    })
    test('render CheckboxTextMount component with mount', () =>{
        const wrapper = mount(<CheckboxTextMount />);
        //expect(wrapper).toMatchSnapshot();
        const checkbox = wrapper.find('input[type="checkbox"]');
        // проверка на количество checkboxes
        expect(checkbox.length).toEqual(1);
        expect(wrapper.find(Input).length).toEqual(1)
        // проверка флага
        expect(checkbox.props().checked).toBe(false);
        // проверка текста в компоненте
        expect(wrapper.text()).toEqual('TestTest1');
        // эмулируем событие "change" по checkbox с флагом true
        checkbox.simulate('change', {target: {checked: true}});
        // проверка флага
        expect(wrapper.find('input[type="checkbox"]').props().checked).toBe(true);
        expect(wrapper.text()).toEqual('TestTest1Тестирование checkbox с помощью enzyme');
        checkbox.simulate('change', {target: {checked: false}});
        expect(wrapper.find('input[type="checkbox"]').props().checked).toBe(false);
        expect(wrapper.text()).toEqual('TestTest1');
    })
})

import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LoginForm', ()=>{
    const props = {
        onSubmit: jest.fn(),
        setIsChecked: jest.fn()
    };
    const render = () => shallow(<LoginForm {...props}/>);

    test('should render',()=>{
        const wrapper = render();
        expect(wrapper.exists()).toBe(true);

    });

    test('should submit credentials',()=>{
        const credentials = { email: 'example@example.com', password: '1234'};
        const wrapper = render();
        const emailField = wrapper.find('.loginForm-field').at(0);
        emailField
        .props()
        .onChange({ target: {name: 'email', value: credentials.email }});

        const passwordField = wrapper.find('.loginForm-field').at(1);
        passwordField
        .props()
        .onChange({ target: {name: 'password', value: credentials.password }});

        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault:()=> {} });

        expect(wrapper.find('.loginSubmit').props().disabled).toBe(false);
        expect(props.onSubmit).toHaveBeenCalledWith(credentials);
    });

    

});



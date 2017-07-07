import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount, render} from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders correctly', () => {
  const wrapper = shallow(
    <App/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

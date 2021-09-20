const { Modal } = require("./Modal")
import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';


test('navbar comportement', () => {
  const navbar = shallow(<Navbar/>);
  const e = document.querySelector('Menu')
  expect(e).not.toBeNull()
})


// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
// import Home from './routes/Home';
import React from 'react';
import { shallow } from 'enzyme';
import Home from './routes/Home';

describe('routes using memory router', () => {

  test('Should render component', () => {
    const wrapper = shallow(<Home /> );
    expect( wrapper ).toMatchSnapshot();
  });

  test('Should render tori gate', () => {
    const wrapper = shallow(<Home /> );
    const toriGate = wrapper.find('Yonko3D');
    expect( typeof(toriGate) ).toBe( 'object' );
  })
})
import React from 'react';
import RegisterMessage from './index';
import { shallow } from 'enzyme';

describe('AlertMessage', () => {
  const wrapper = shallow(<RegisterMessage />);

  it('Should render alert Message', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

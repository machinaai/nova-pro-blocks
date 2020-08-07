import React from 'react';
import { shallow } from 'enzyme';

import HeaderDropdown from './index';

describe('HeaderNbe', () => {
  it('should show correctly', () => {
    const wrapper = shallow(<HeaderDropdown />);
    expect(wrapper).toMatchSnapshot();
  });
});

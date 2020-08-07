import React from 'react';
import { shallow } from 'enzyme';

import SelectLang from './index';

jest.mock('umi', () => {
  return {
    __esModule: true,
    getLocale: jest.fn(),
    setLocale: jest.fn(),
  };
});

describe('HeaderNbe', () => {
  const wrapper = shallow(<SelectLang />);

  it('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the lang', () => {
    const dropdown = wrapper.find('HeaderDropdown').simulate('mouseover');
    const lang = wrapper.find('Menu').exists;
    expect(dropdown).toBeTruthy();
    expect(lang).toBeTruthy();
  });
});

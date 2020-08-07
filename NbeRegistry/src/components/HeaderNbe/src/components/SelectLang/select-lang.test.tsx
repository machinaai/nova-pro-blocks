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
  it('should show correctly', () => {
    const wrapper = shallow(<SelectLang />);
    expect(wrapper).toMatchSnapshot();
  });
});

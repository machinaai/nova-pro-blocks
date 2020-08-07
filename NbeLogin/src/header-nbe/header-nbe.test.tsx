import React from 'react';
import { shallow } from 'enzyme';

import HeaderNbe from './index';

jest.mock('umi', () => {
  return {
    __esModule: true,
    useIntl: jest.fn(() => {
      return { formatMessage: jest.fn() };
    }),
  };
});

describe('HeaderNbe', () => {
  it('should show correctly', () => {
    const wrapper = shallow(<HeaderNbe />);
    expect(wrapper).toMatchSnapshot();
  });
});

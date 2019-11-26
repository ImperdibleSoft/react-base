import * as React from 'react';
import { shallow } from 'enzyme';

import Date from '..';
import { DATE } from '../../../models';

describe('Date', () => {
  it('should render a valid date field', () => {
    const options = {
      id: 'date-field',
      label: 'Field label',
      type: DATE,
    };

    const component = shallow(<Date onChange={() => {}} onClick={() => {}} onFocus={() => {}} options={options} />);

    expect(component).toMatchSnapshot();
  });
});

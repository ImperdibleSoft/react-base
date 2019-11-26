import * as React from 'react';
import { shallow } from 'enzyme';

import Switch from '..';
import { SWITCH } from '../../../models';

describe('Switch', () => {
  it('should render a valid switch field', () => {
    const options = {
      id: 'switch-field',
      label: 'Field label',
      type: SWITCH,
    };

    const component = shallow(<Switch onChange={() => {}} onClick={() => {}} onFocus={() => {}} options={options} />);

    expect(component).toMatchSnapshot();
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '..';
import { CHECKBOX } from '../../../models';

describe('Checkbox', () => {
  it('should render a valid checkbox field', () => {
    const options = {
      id: 'checkbox-field',
      label: 'Field label',
      type: CHECKBOX,
    };

    const component = shallow(<Checkbox onChange={() => {}} onClick={() => {}} onFocus={() => {}} options={options} />);

    expect(component).toMatchSnapshot();
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import Dropdown from '..';
import { DROPDOWN } from '../../../models';

describe('Dropdown', () => {
  it('should render a valid dropdown field', () => {
    const options = {
      id: 'dropdown-field',
      label: 'Field label',
      options: [
        {
          id: 'option-1',
          label: 'Option 1',
          value: '1',
          type: 'Option',
        },
      ],
      type: DROPDOWN,
    };

    const component = shallow(<Dropdown onChange={() => {}} onClick={() => {}} onFocus={() => {}} options={options} />);

    expect(component).toMatchSnapshot();
  });
});

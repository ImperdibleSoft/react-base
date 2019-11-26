import * as React from 'react';
import { shallow } from 'enzyme';

import Text from '..';
import { EMAIL, NUMBER, PASSWORD, TEXT, TEXTAREA } from '../../../models';

describe('Text', () => {
  it('should render a valid email field', () => {
    const options = {
      id: 'email-field',
      label: 'Field label',
      type: EMAIL,
    };

    const component = shallow(<Text onChange={() => {}} onClick={() => {}} onFocus={() => {}} options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid number field', () => {
    const options = {
      id: 'number-field',
      label: 'Field label',
      type: NUMBER,
    };

    const component = shallow(<Text onChange={() => {}} onClick={() => {}} onFocus={() => {}} options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid password field', () => {
    const options = {
      id: 'password-field',
      label: 'Field label',
      type: PASSWORD,
    };

    const component = shallow(<Text onChange={() => {}} onClick={() => {}} onFocus={() => {}} options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid text field', () => {
    const options = {
      id: 'text-field',
      label: 'Field label',
      type: TEXT,
    };

    const component = shallow(<Text onChange={() => {}} onClick={() => {}} onFocus={() => {}} options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid textarea field', () => {
    const options = {
      id: 'text-field',
      label: 'Field label',
      type: TEXTAREA,
    };

    const component = shallow(<Text onChange={() => {}} onClick={() => {}} onFocus={() => {}} options={options} />);

    expect(component).toMatchSnapshot();
  });
});

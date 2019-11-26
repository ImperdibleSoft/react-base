import * as React from 'react';
import { shallow } from 'enzyme';

import Field from '..';

import { BUTTON, CHECKBOX, DATE, DROPDOWN, PASSWORD, SUBMIT, SWITCH, TEXT, TEXTAREA } from '../../models';

describe('Field', () => {
  it('should render a valid button field', () => {
    const options = {
      id: 'button-field',
      label: 'Field label',
      onChange: () => {},
      onClick: () => {},
      onFocus: () => {},
      type: BUTTON,
    };

    const component = shallow(<Field options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid checkbox field', () => {
    const options = {
      id: 'checkbox-field',
      label: 'Field label',
      onChange: () => {},
      onClick: () => {},
      onFocus: () => {},
      type: CHECKBOX,
    };

    const component = shallow(<Field options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid date field', () => {
    const options = {
      id: 'date-field',
      label: 'Field label',
      onChange: () => {},
      onClick: () => {},
      onFocus: () => {},
      type: DATE,
    };

    const component = shallow(<Field options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid dropdown field', () => {
    const options = {
      id: 'dropdown-field',
      label: 'Field label',
      onChange: () => {},
      onClick: () => {},
      onFocus: () => {},
      type: DROPDOWN,
    };

    const component = shallow(<Field options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid password field', () => {
    const options = {
      id: 'password-field',
      label: 'Field label',
      onChange: () => {},
      onClick: () => {},
      onFocus: () => {},
      type: PASSWORD,
    };

    const component = shallow(<Field options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid submit field', () => {
    const options = {
      id: 'submit-field',
      label: 'Field label',
      onChange: () => {},
      onClick: () => {},
      onFocus: () => {},
      type: SUBMIT,
    };

    const component = shallow(<Field options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid switch field', () => {
    const options = {
      id: 'switch-field',
      label: 'Field label',
      onChange: () => {},
      onClick: () => {},
      onFocus: () => {},
      type: SWITCH,
    };

    const component = shallow(<Field options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid text field', () => {
    const options = {
      id: 'text-field',
      label: 'Field label',
      onChange: () => {},
      onClick: () => {},
      onFocus: () => {},
      type: TEXT,
    };

    const component = shallow(<Field options={options} />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid textarea field', () => {
    const options = {
      id: 'textarea-field',
      label: 'Field label',
      onChange: () => {},
      onClick: () => {},
      onFocus: () => {},
      type: TEXTAREA,
    };

    const component = shallow(<Field options={options} />);

    expect(component).toMatchSnapshot();
  });
});

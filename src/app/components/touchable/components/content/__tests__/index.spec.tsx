import * as React from 'react';
import { shallow } from 'enzyme';

import Content from '..';

describe('Content', () => {
  it('should render a text', () => {
    const options = {
      label: 'Add',
    };
    const component = shallow(<Content options={options} />);
    expect(component).toMatchSnapshot();
  });

  it('should render a text and a text-icon', () => {
    const options = {
      icon: 'plus',
      label: 'Add',
      iconLast: true,
    };
    const component = shallow(<Content options={options} />);
    expect(component).toMatchSnapshot();
  });

  it('should render a text and an icon', () => {
    const options = {
      icon: <img src="plus" />,
      label: 'Add',
      iconLast: true,
    };
    const component = shallow(<Content options={options} />);
    expect(component).toMatchSnapshot();
  });

  it('should render a text-icon', () => {
    const options = {
      icon: 'plus',
    };
    const component = shallow(<Content options={options} />);
    expect(component).toMatchSnapshot();
  });

  it('should render a text-icon and a text', () => {
    const options = {
      icon: 'plus',
      label: 'Add',
      iconLast: false,
    };
    const component = shallow(<Content options={options} />);
    expect(component).toMatchSnapshot();
  });

  it('should render an icon', () => {
    const options = {
      icon: <img src="plus" />,
    };
    const component = shallow(<Content options={options} />);
    expect(component).toMatchSnapshot();
  });

  it('should render an icon and a text', () => {
    const options = {
      icon: <img src="plus" />,
      label: 'Add',
      iconLast: false,
    };
    const component = shallow(<Content options={options} />);
    expect(component).toMatchSnapshot();
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import Menu from '..';

describe('Menu', () => {
  it('should render a valid closed menu', () => {
    const component = shallow(
      <Menu handleClick={() => {}} isOpen={false} toggler={{ label: 'test' }}>
        <ul>
          <li>Test</li>
        </ul>
      </Menu>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render a valid open menu', () => {
    const component = shallow(
      <Menu handleClick={() => {}} isOpen={true} toggler={{ label: 'test' }}>
        <ul>
          <li>Test</li>
        </ul>
      </Menu>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render a valid open menu with icon', () => {
    const component = shallow(
      <Menu handleClick={() => {}} isOpen={true} toggler={{ icon: 'test', label: 'test' }}>
        <ul>
          <li>Test</li>
        </ul>
      </Menu>
    );

    expect(component).toMatchSnapshot();
  });
});

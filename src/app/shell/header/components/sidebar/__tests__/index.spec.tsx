import * as React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '..';

describe('Sidebar', () => {
  it('should render a valid closed sidebar', () => {
    const component = shallow(
      <Sidebar handleClick={() => {}} isOpen={false}>
        <ul>
          <li>Test</li>
        </ul>
      </Sidebar>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render a valid open sidebar', () => {
    const component = shallow(
      <Sidebar handleClick={() => {}} isOpen={true}>
        <ul>
          <li>Test</li>
        </ul>
      </Sidebar>
    );

    expect(component).toMatchSnapshot();
  });
});

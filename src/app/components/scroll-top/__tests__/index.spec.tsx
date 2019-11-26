import * as React from 'react';
import { shallow } from 'enzyme';

import ScrollTop from '..';

describe('ScrollTop', () => {
  it('should render its children', () => {
    const component = shallow(
      <ScrollTop>
        <p>Test</p>
      </ScrollTop>
    );
    expect(component).toMatchSnapshot();
  });
});

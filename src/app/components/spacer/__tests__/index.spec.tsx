import * as React from 'react';
import { shallow } from 'enzyme';

import Spacer from '..';

describe('Spacer', () => {
  it('should render a small spacer without border', () => {
    const component = shallow(<Spacer size="sm" />);
    expect(component).toMatchSnapshot();
  });

  it('should render an extra small spacer without border', () => {
    const component = shallow(<Spacer size="xs" />);
    expect(component).toMatchSnapshot();
  });

  it('should render the default spacer', () => {
    const component = shallow(<Spacer />);
    expect(component).toMatchSnapshot();
  });
});

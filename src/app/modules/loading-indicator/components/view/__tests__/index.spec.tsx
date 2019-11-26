import * as React from 'react';
import { shallow } from 'enzyme';

import View from '..';

describe('Loading indicator', () => {
  it('should render a valid loading online component', () => {
    const component = shallow(<View fixedSidebar={false} isLoading />);

    expect(component).toMatchSnapshot();
  });

  it('should render a valid online component', () => {
    const component = shallow(<View fixedSidebar={false} />);

    expect(component).toMatchSnapshot();
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import View from '..';

describe('Landing', () => {
  it('should render a valid screen', () => {
    const component = shallow(<View />);
    expect(component).toMatchSnapshot();
  });
});

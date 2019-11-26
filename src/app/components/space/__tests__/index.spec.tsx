import * as React from 'react';
import { shallow } from 'enzyme';

import Space from '..';

describe('Space', () => {
  it('should render the component', () => {
    const component = shallow(<Space />);
    expect(component).toMatchSnapshot();
  });
});

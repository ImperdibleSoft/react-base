import * as React from 'react';
import { shallow } from 'enzyme';

import Footer from '..';

describe('Footer', () => {
  it('should render a valid footer', () => {
    const component = shallow(<Footer appVersion="1" fixedSidebar={false} />);

    expect(component).toMatchSnapshot();
  });
});

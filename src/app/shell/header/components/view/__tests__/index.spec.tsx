import * as React from 'react';
import { shallow } from 'enzyme';

import View from '..';

describe('Header', () => {
  it('should render a header', () => {
    const component = shallow(
      <View logo="custom-logo.png" logSmartEvent={() => {}} openMenu={''} toggleMenu={() => {}} />
    );

    expect(component).toMatchSnapshot();
  });
});

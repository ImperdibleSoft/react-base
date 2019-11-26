import * as React from 'react';
import { shallow } from 'enzyme';

import { Item } from '..';

describe('Item', () => {
  it('should render a valid external link', () => {
    const component = shallow(
      <Item theme={{ active: 'light' }} to="" isExternal>
        Test link
      </Item>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render a valid local link', () => {
    const component = shallow(
      <Item theme={{ active: 'light' }} to="">
        Test link
      </Item>
    );

    expect(component).toMatchSnapshot();
  });
});

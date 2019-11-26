import * as React from 'react';
import { shallow } from 'enzyme';

import List from '..';

describe('List', () => {
  it('should render a valid list', () => {
    const component = shallow(
      <List>
        {({ Item }) => (
          <>
            <Item>List item</Item>
          </>
        )}
      </List>
    );

    expect(component).toMatchSnapshot();
  });
});

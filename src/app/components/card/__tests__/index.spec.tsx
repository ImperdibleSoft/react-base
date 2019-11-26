import * as React from 'react';
import { shallow } from 'enzyme';

import { Card } from '..';

describe('Card', () => {
  it('should render correctly a populated card', () => {
    const component = shallow(
      <Card>
        <p>test</p>
      </Card>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render correctly an empty card', () => {
    const component = shallow(<Card />);

    expect(component).toMatchSnapshot();
  });
});

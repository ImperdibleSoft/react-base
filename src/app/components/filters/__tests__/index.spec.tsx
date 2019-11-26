import * as React from 'react';
import { shallow } from 'enzyme';

import Filters from '..';

import { TEXT } from '../../forms/models';

const input = {
  id: 'test',
  label: 'Test filter',
  type: TEXT,
};

describe('Filters', () => {
  it('should render closed filters', () => {
    const component = shallow(<Filters isOpen={false} options={[input]} />);
    expect(component).toMatchSnapshot();
  });

  it('should render open filters', () => {
    const component = shallow(<Filters isOpen={true} options={[input]} />);
    expect(component).toMatchSnapshot();
  });
});

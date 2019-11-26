import * as React from 'react';
import { shallow } from 'enzyme';

import Buttons from '..';
import { BUTTON } from '../../../../forms/models';

const button1 = { id: 'button-1', type: BUTTON, label: 'Button' };
const button2 = { id: 'button-2', type: BUTTON, label: 'Link', to: '/url' };
const button3 = { id: 'button-3', type: BUTTON, label: 'Button', onClick: () => {} };

describe('Buttons', () => {
  it('should render 2 buttons', () => {
    const component = shallow(<Buttons options={[button1, button2]} />);
    expect(component).toMatchSnapshot();
  });

  it('should render 3 buttons (aligned to left)', () => {
    const component = shallow(<Buttons align="left" options={[button1, button2, button3]} />);
    expect(component).toMatchSnapshot();
  });

  it('should render nothing', () => {
    const component = shallow(<Buttons options={[]} />);
    expect(component).toMatchSnapshot();
  });
});

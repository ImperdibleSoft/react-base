import * as React from 'react';
import { shallow } from 'enzyme';

import Link from '..';

describe('Link', () => {
  it('should render a button that looks like a link', () => {
    const component = shallow(<Link options={{ id: 'button', label: 'Link', onClick: () => {} }} />);
    expect(component).toMatchSnapshot();
  });

  it('should render a link', () => {
    const component = shallow(<Link options={{ id: 'button', label: 'Link', to: '/url' }} />);
    expect(component).toMatchSnapshot();
  });

  it('should render a link with a text-icon', () => {
    const component = shallow(
      <Link options={{ id: 'button', label: 'Link', icon: 'send', iconLast: true, to: '/url' }} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render a react-based link', () => {
    const component = shallow(<Link options={{ id: 'button', label: 'Link', to: { pathname: '/url' } }} />);
    expect(component).toMatchSnapshot();
  });

  it('should render an external link', () => {
    const component = shallow(<Link options={{ id: 'button', isExternal: true, label: 'Link', to: '/url' }} />);
    expect(component).toMatchSnapshot();
  });

  it('should render an invalid link', () => {
    const component = shallow(<Link options={{ id: 'button', label: 'Link' }} />);
    expect(component).toMatchSnapshot();
  });
});

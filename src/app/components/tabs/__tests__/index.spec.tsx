import * as React from 'react';
import { shallow } from 'enzyme';

import Tabs from '..';
import Tab from '../components/tab';

const textTab = { id: 'test-text', label: 'Test' };
const linkTab = { id: 'test-link', label: 'Link', to: '/' };
const iconTab = { id: 'test-icon', icon: 'plus' };

describe('Tab', () => {
  it('should render a text tab', () => {
    const component = shallow(<Tab handleClick={() => {}} isActive={false} options={textTab} reference={{}} />);
    expect(component).toMatchSnapshot();
  });

  it('should render a link tab', () => {
    const component = shallow(<Tab handleClick={() => {}} isActive={false} options={linkTab} reference={{}} />);
    expect(component).toMatchSnapshot();
  });

  it('should render an icon tab', () => {
    const component = shallow(<Tab handleClick={() => {}} isActive={false} options={iconTab} reference={{}} />);
    expect(component).toMatchSnapshot();
  });
});

describe('Tabs', () => {
  it('should render 2 tabs', () => {
    const component = shallow(<Tabs activeTab={'test-text'} options={[textTab, iconTab]} />);
    expect(component).toMatchSnapshot();
  });

  it('should render nothing', () => {
    const component = shallow(<Tabs activeTab={'test-text'} options={[]} />);
    expect(component).toMatchSnapshot();
  });
});

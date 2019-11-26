import * as React from 'react';
import { shallow } from 'enzyme';

import { Page, PageHeading, PageTitle, PageH1, PageH2, PageH3, PageH4 } from '..';

describe('Page', () => {
  it('should render a page', () => {
    const component = shallow(<Page />);
    expect(component).toMatchSnapshot();
  });

  it('should render a page with max-with', () => {
    const component = shallow(<Page maxWidth={1024} />);
    expect(component).toMatchSnapshot();
  });
});

describe('PageHeading', () => {
  it('should render properly', () => {
    const component = shallow(<PageHeading>Test</PageHeading>);
    expect(component).toMatchSnapshot();
  });
});

describe('PageTitle', () => {
  it('should render properly', () => {
    const component = shallow(<PageTitle>Test</PageTitle>);
    expect(component).toMatchSnapshot();
  });
});

describe('PageH1', () => {
  it('should render properly', () => {
    const component = shallow(<PageH1>Test</PageH1>);
    expect(component).toMatchSnapshot();
  });
});

describe('PageH2', () => {
  it('should render properly', () => {
    const component = shallow(<PageH2>Test</PageH2>);
    expect(component).toMatchSnapshot();
  });
});

describe('PageH3', () => {
  it('should render properly', () => {
    const component = shallow(<PageH3>Test</PageH3>);
    expect(component).toMatchSnapshot();
  });
});

describe('PageH4', () => {
  it('should render properly', () => {
    const component = shallow(<PageH4>Test</PageH4>);
    expect(component).toMatchSnapshot();
  });
});

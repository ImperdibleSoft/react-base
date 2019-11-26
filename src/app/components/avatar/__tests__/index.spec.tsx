import * as React from 'react';
import { shallow } from 'enzyme';

import Avatar from '..';

describe('Avatar', () => {
  describe('with no valid picture', () => {
    it('should render correctly a company placeholder', () => {
      const component = shallow(<Avatar profile={{ picture: '', name: 'Company Inc.' }} />);
      expect(component).toMatchSnapshot();
    });

    it('should render correctly a user placeholder', () => {
      const component = shallow(<Avatar profile={{ picture: '', fullName: 'My full name' }} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('with valid picture', () => {
    it('should render correctly a company Avatar', () => {
      const component = shallow(<Avatar profile={{ picture: 'my-picture', name: 'Company Inc.' }} />);
      expect(component).toMatchSnapshot();
    });

    it('should render correctly a user Avatar', () => {
      const component = shallow(<Avatar profile={{ picture: 'my-picture', fullName: 'My full name' }} />);
      expect(component).toMatchSnapshot();
    });
  });
});

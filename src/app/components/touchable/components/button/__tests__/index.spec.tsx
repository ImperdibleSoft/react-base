import * as React from 'react';
import { shallow } from 'enzyme';

import Button from '..';
import { BUTTON, SUBMIT } from '../../../../forms/models';

describe('Button', () => {
  describe('by type', () => {
    it('should render a button', () => {
      const component = shallow(<Button options={{ id: 'button', label: 'Button', type: BUTTON }} />);
      expect(component).toMatchSnapshot();
    });

    it('should render a button with a text-icon', () => {
      const component = shallow(
        <Button options={{ id: 'button', label: 'Button', icon: 'send', iconLast: true, type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });

    it('should render a link that looks like a button', () => {
      const component = shallow(<Button options={{ id: 'button', label: 'Link', to: '/url', type: BUTTON }} />);
      expect(component).toMatchSnapshot();
    });

    it('should render a submit button', () => {
      const component = shallow(<Button options={{ id: 'button', label: 'Submit', type: SUBMIT }} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('by colors and shapes', () => {
    it('should render a danger button', () => {
      const component = shallow(
        <Button options={{ buttonType: 'danger', id: 'button', label: 'Button', type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });

    it('should render a disabled button', () => {
      const component = shallow(
        <Button options={{ buttonType: 'disabled', id: 'button', label: 'Button', type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });

    it('should render a facebook button', () => {
      const component = shallow(
        <Button options={{ buttonType: 'facebook', id: 'button', label: 'Button', type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });

    it('should render a google button', () => {
      const component = shallow(
        <Button options={{ buttonType: 'google', id: 'button', label: 'Button', type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });

    it('should render a instagram button', () => {
      const component = shallow(
        <Button options={{ buttonType: 'instagram', id: 'button', label: 'Button', type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });

    it('should render a linkedin button', () => {
      const component = shallow(
        <Button options={{ buttonType: 'linkedin', id: 'button', label: 'Button', type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });

    it('should render a primary button', () => {
      const component = shallow(
        <Button options={{ buttonType: 'primary', id: 'button', label: 'Button', type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });

    it('should render a success button', () => {
      const component = shallow(
        <Button options={{ buttonType: 'success', id: 'button', label: 'Button', type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });

    it('should render a twitter button', () => {
      const component = shallow(
        <Button options={{ buttonType: 'twitter', id: 'button', label: 'Button', type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });

    it('should render a transparent button', () => {
      const component = shallow(
        <Button options={{ isTransparent: true, id: 'button', label: 'Button', type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });

    it('should render a warning button', () => {
      const component = shallow(
        <Button options={{ buttonType: 'warning', id: 'button', label: 'Button', type: BUTTON }} />
      );
      expect(component).toMatchSnapshot();
    });
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import Message from '..';

describe('Message', () => {
  it('should render the default message', () => {
    const component = shallow(
      <Message>
        <p>Test</p>
      </Message>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the error message', () => {
    const component = shallow(
      <Message type="error">
        <p>Test error</p>
      </Message>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the success message', () => {
    const component = shallow(
      <Message type="success">
        <p>Test success</p>
      </Message>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the warning message', () => {
    const component = shallow(
      <Message type="warning">
        <p>Test warning</p>
      </Message>
    );
    expect(component).toMatchSnapshot();
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import Modal from '..';

describe('Modal', () => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);

  it('should render a closed modal', () => {
    const component = shallow(
      <Modal handleClose={() => {}} isOpen={false}>
        <p>Test children</p>
      </Modal>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render an open modal', () => {
    const component = shallow(
      <Modal handleClose={() => {}} isOpen={true}>
        <p>Test children</p>
      </Modal>
    );

    expect(component).toMatchSnapshot();
  });
});

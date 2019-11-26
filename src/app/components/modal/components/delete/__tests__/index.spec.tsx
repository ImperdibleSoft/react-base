import * as React from 'react';
import { shallow } from 'enzyme';

import DeleteModal from '..';

describe('DeleteModal', () => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);

  const handleClose = () => {};
  const handleSubmit = () => {};

  it('should render a closed modal', () => {
    const component = shallow(
      <DeleteModal handleClose={handleClose} handleSubmit={handleSubmit} isFetching={false} isOpen={false}>
        <p>Test children</p>
      </DeleteModal>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render an empty open modal', () => {
    const component = shallow(
      <DeleteModal handleClose={handleClose} handleSubmit={handleSubmit} isFetching={false} isOpen={true}></DeleteModal>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render an open fetching modal', () => {
    const component = shallow(
      <DeleteModal handleClose={handleClose} handleSubmit={handleSubmit} isFetching={true} isOpen={true}>
        <p>Test children</p>
      </DeleteModal>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render an open modal', () => {
    const component = shallow(
      <DeleteModal handleClose={handleClose} handleSubmit={handleSubmit} isFetching={false} isOpen={true}>
        <p>Test children</p>
      </DeleteModal>
    );

    expect(component).toMatchSnapshot();
  });
});

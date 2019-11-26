import * as React from 'react';

import Modal, { Header, Body, Footer } from '../..';
import { Buttons } from '../../../touchable';
import { BUTTON } from '../../../forms/models';
import { CANCEL_LABEL, DELETE_LABEL, DELETE_ICON, CANCEL_ICON } from '../../../../../common/constants/buttons';

interface OwnProps {
  children?: React.ReactChild;
  handleClose: () => void;
  handleSubmit: () => void;
  isFetching: boolean;
  isOpen: boolean;
}

const DeleteModal: React.FC<OwnProps> = ({ children, handleClose, handleSubmit, isFetching, isOpen }: OwnProps) => (
  <Modal handleClose={handleClose} isOpen={isOpen}>
    <>
      <Header>
        <h5>Delete</h5>
      </Header>
      <Body>
        {children}
        {!children && (
          <>
            <p>Are you sure you want to delete this?</p>
          </>
        )}
      </Body>
      <Body>
        <p>
          This action <b>cannot be undone</b>.
        </p>
      </Body>
      <Footer>
        <Buttons
          options={[
            {
              buttonType: 'danger' as 'danger',
              icon: DELETE_ICON,
              id: 'confirm-delete',
              isDisabled: isFetching,
              label: DELETE_LABEL,
              onClick: handleSubmit,
              type: BUTTON,
            },
            {
              icon: CANCEL_ICON,
              id: 'cancel-delete',
              isDisabled: isFetching,
              label: CANCEL_LABEL,
              onClick: handleClose,
              type: BUTTON,
            },
          ]}
        />
      </Footer>
    </>
  </Modal>
);

export default DeleteModal;

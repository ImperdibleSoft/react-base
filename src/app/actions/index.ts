import { ActionCreator } from '../../definitions/action-creator';
import { FILTERS_APPLIED } from '../actionTypes';

export const applyFilter: ActionCreator = payload => dispatch => {
  dispatch({
    type: FILTERS_APPLIED,
    payload,
  });
};

import { Dispatch } from 'redux';

export type CheckActionType = 'CHECK_REQUESTED' | 'CHECK_SUCCEED' | 'CHECK_FAILED';

export interface CheckAction {
  type: CheckActionType;
}

export type CheckActionCreator = () => (dispatch: Dispatch<CheckAction>) => void;

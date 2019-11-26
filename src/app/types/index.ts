import { SmartFormState } from '../components/forms/types';

export type FilterCollectionActionType = 'FILTERS_APPLIED';

export interface FilterCollectionAction {
  type: FilterCollectionActionType;
  payload: any;
}

export interface RootState {
  form: SmartFormState;
}

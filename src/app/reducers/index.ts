import { combineReducers, Reducer } from 'redux';
import { RootState } from '../types';

// Import reducers
import form from '../components/forms/reducers';

const rootReducer: Reducer<RootState> = combineReducers({
  form,
});

export default rootReducer;

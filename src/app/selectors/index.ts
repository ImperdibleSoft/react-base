import { RootState } from '../types';

export const getAppStore = (state: RootState) => state;
export const isFetchingAnything = () => [].filter(m => m).length > 0;


import { combineReducers } from 'redux';

import appReducer from '../../modules/reducers/AppListReducer';

const rootReducer = combineReducers({
  appData: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

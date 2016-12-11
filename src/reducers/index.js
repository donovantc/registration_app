import { combineReducers } from 'redux';

import UserDetailReducer from './UserDetailReducer';
import OnboardingReducer from './OnboardingReducer';

export default combineReducers({
   userDetails: UserDetailReducer,
   onboardingProcess: OnboardingReducer
});
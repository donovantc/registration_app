/**
 * This reducer handles the execution of actions that manipulate the store with regards to onboarding state
 */

const initialState = {
    onboardingStep: 'INITIALIZED'
}

const OnboardingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_ONBOARDING_PENDING':
            return state;
        case 'FETCH_USER_ONBOARDING_FULFILLED':
            return {...state, onboardingStep: action.payload.onboarding_step};
        case 'FETCH_USER_ONBOARDING_REJECTED':
            return {...state, error: action.payload};
        case 'CHANGE_STEP_PENDING':
            return state;
        case 'CHANGE_STEP_FULFILLED':
            return {...state, onboardingStep: action.payload.onboarding_step};
        case 'CHANGE_STEP_REJECTED':
            return {...state, error: action.payload};
        case 'CHANGE_STEP_UI':
            return {...state, onboardingStepUi: action.payload};
        default:
            return state; 
    }
}

export default OnboardingReducer;
/**
 * All actions which can be perform on the onboarding state data
 */

import { fetchUserOnboarding, setUserOnboarding } from '../services/UserService';

/* constants array of valid steps in the onboarding process */
const steps = ['INITIALIZED', 'PROFILE_COMPLETED', 'ONBOARDING_COMPLETED'];

export function stepNext(userId, currentStep){
    let currentStepIndex = steps.findIndex((a) => a === currentStep);
    let nextStepIndex = currentStepIndex;

    if (currentStepIndex < steps.length - 1){
        //last step was not reached so move to the next step
        nextStepIndex = currentStepIndex + 1;
    }

    return {
        type: "CHANGE_STEP",
        payload: setUserOnboarding(userId, steps[nextStepIndex])
    };
}

export function getUserOnboardingStep(id){
    return {
        type: "FETCH_USER_ONBOARDING",
        payload: fetchUserOnboarding(id)
    };
}

export function setStepForUi(newStep){
    return {
        type: "CHANGE_STEP_UI",
        payload: newStep
    };
}
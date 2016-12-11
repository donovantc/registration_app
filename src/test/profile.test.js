import assert from 'assert';
import * as onboardingActions from '../actions/onboardingActions';

describe('onboarding actions', () => {
    describe('stepNext', () => {

        it('should change onboarding step from INITIALIZED to PROFILECOMPLETED', () => {
            onboardingActions.stepNext(1, 'INITIALIZED').payload.then((data) => {
                assert.equal(data.onboarding_step, 'PROFILECOMPLETED');
            });
        });

        it('should not change onboarding step when the current step is ONBOARDING_COMPLETED', () => {
            onboardingActions.stepNext(1, 'ONBOARDING_COMPLETED').payload.then((data) => {
                assert.equal(data.onboarding_step, 'ONBOARDING_COMPLETED');
            });
        });
    });

    describe('getUserOnboardingStep', () => {
        it('should return INITIALIZED for userid 1', () => {
            onboardingActions.getUserOnboardingStep(1).payload.then((data) => {
                assert.equal(data.onboarding_step, 'INITIALIZED');
            });
        });
    });

    describe('setStepForUi', () => {
        it('should change the step to 1 when given 1 as input', () => {
            assert.equal(onboardingActions.setStepForUi(1).payload, 1);
        });
    });
});
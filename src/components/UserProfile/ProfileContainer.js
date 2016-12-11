/**
 * The ProfileContainer component contains all steps involved in the onboarding process
 * Step 0 - The INITIALIZED step containing the users details
 * Step 1 - The PROFILE_COMPLETED step containing additional information
 * Step 2 - The ONBOARDING_COMPLETED step which contains the success message
 */

import React, { Component } from 'react';
import { Nav, NavItem, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import UserDetailForm from '../common/UserDetailForm';
import ProfileSlider from './ProfileSlider';
import { 
    stepNext,
    getUserOnboardingStep,
    setStepForUi
    } from '../../actions/onboardingActions';

class ProfileContainer extends Component {
    /**
     * Once mounted, the container determines the initial onboarding step for the user
     */
    componentDidMount = () => {
        const { id } = this.props.userDetails;
        this.props.dispatch(getUserOnboardingStep(id));
    }

    /**
     * The step selection is changed.
     * This event handler does not allow for selection to be changed if the onboarding step is not ONBOARDING_COMPLETED
     */
    handleSelect = (e) => {
       const { onboardingStep } = this.props.onboardingProcess;

       if(onboardingStep === 'ONBOARDING_COMPLETED')
         this.props.dispatch(setStepForUi(e));  
    }

    /**
     * The onboarding step will be changed
     */
    onNext = (e) => {
        const { stepUi } = this.props; 
        const { onboardingStep } = this.props.onboardingProcess;
        const { id } = this.props.userDetails;

        if (onboardingStep !== 'ONBOARDING_COMPLETED')
            this.props.dispatch(stepNext(id, onboardingStep));
        else
            this.props.dispatch(setStepForUi(0));
    }

    /**
     * The forms title is determined based on the currently selected step
     */
    getTitle = (step) => {
        switch (step) {
            case 0:
                return 'User Profile';
            case 1:
                return 'Info';
            case 2:
                return 'Success';
        }
    }

    /**
     * Render the appropriate step based on the currently selected step
     */
    renderStep = (step) => {
        const {successMessageStyle} = styles;

        switch (step) {
            case 0:
                return (
                    <UserDetailForm readonly />
                );
            case 1:
                return <ProfileSlider />;
            case 2:
                return (
                    <div style={successMessageStyle}>
                        Thank you for your registration!
                    </div>
                );
            default:
                return null;
        }
    }
    
    render = () => {
        const { stepIndicatorStyle, titleStyle, stepContentStyle, buttonContainerStyle } = styles;
        const { stepUi } = this.props;
        const { onboardingStep } = this.props.onboardingProcess;

        return (
            <div>
                <Nav style={stepIndicatorStyle} bsStyle="pills" activeKey={stepUi} onSelect={this.handleSelect.bind(this)}>
                    <NavItem eventKey={0} >Profile</NavItem>
                    <NavItem eventKey={1} >Info</NavItem>
                    <NavItem eventKey={2} >Success</NavItem>
                </Nav>
                <div style={stepContentStyle}>
                    <h1 style={titleStyle}>{this.getTitle(stepUi)}</h1>
                    {this.renderStep(stepUi)}
                </div>
                <div style={ buttonContainerStyle }>
                {   (onboardingStep === 'ONBOARDING_COMPLETED' && stepUi < 2) ?
                    null:
                    <Button onClick={
                            this.onNext.bind(this)
                        } 
                        bsStyle="primary" 
                        bsSize="large">
                        {
                          onboardingStep === 'ONBOARDING_COMPLETED' ? 'Finished'  : 'Next' 
                        }
                    </Button>
                }
                </div>
            </div>
        );
    }
}

const styles = {
    stepIndicatorStyle: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 30
    },

    stepContentStyle: {
        height: '100%',
        margin: 20
    },

    titleStyle : {
        textAlign: 'center',
        color: '#337ab7'
    },

    successMessageStyle: {
        background: '#bfbfbf',
        textAlign: 'center',
        fontSize: 30,
        padding: 50
    },

    buttonContainerStyle: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20
    }
}

/**
 * This function maps the onboarding step to the appropriate step to be displayed on the UI
 */
const mapOnboardingStepToUi = (onboardingStep) => {
    let steps = ['INITIALIZED', 'PROFILE_COMPLETED', 'ONBOARDING_COMPLETED'];
    return steps.findIndex((a) => a === onboardingStep); 
}

/**
 * This function maps the current state to props
 * Once the onboarding process is completed, the selected step may be changed manually which then sets the onboardingStepUi.
 * Hence, when the onboardingStepUi is undefined, the onboarding process is not yet complete
 */
const maptStateToProps = (state) => {
    const { onboardingStep, onboardingStepUi } = state.onboardingProcess;
    let stepUi = onboardingStepUi;

    /* Only update the ui step if onboarding was completed */
    if (stepUi == undefined){
        stepUi = mapOnboardingStepToUi(onboardingStep);
    }

    return {
        stepUi, 
        onboardingProcess: state.onboardingProcess,
        userDetails : state.userDetails
    };
}

export default connect(maptStateToProps)(ProfileContainer);
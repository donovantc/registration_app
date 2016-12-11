/**
 * The UserDetailForm component contains all the user details
 * The follow props are available:
 * - register : Displays additional fields such as password and terms of agreement
 * - readonly : All input fields will be readonly
 */

import React, { Component } from 'react';
import { 
    form, 
    FormGroup, 
    FormControl, 
    ControlLabel,
    Checkbox } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import { connect } from 'react-redux';

import { 
    setUsername,
    setBirthdate,
    setEmail,
    setPhone,
    setPassword,
    setAgreedTerms
 } from '../../actions/userDetailActions';

class UserDetailForm extends Component {

    getValidationState() {

    }

    /**
     * Render the password and terms of agreement fields which are specific to registration
     */
    renderRegisterComponents = () => {
        const { password, agreedTerms } = this.props.userDetails;
        return (<div>
            <FormGroup
                controlId="regPassword"
                validationState={this.getValidationState()}>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => this.props.dispatch(setPassword(e.target.value))}/>
                <FormControl.Feedback />
            </FormGroup>
            <FormGroup
                controlId="regTerms"
                validationState={this.getValidationState()}>
                <Checkbox
                    checked={agreedTerms} 
                    onChange={(e) => this.props.dispatch(setAgreedTerms(e.target.value))}>
                    I agree with the terms and conditions.
                </Checkbox>
            </FormGroup>
        </div>);
    }

    render(){
        const { formStyle } = styles;
        const { register, readonly } = this.props;
        const { username, birthdate, email, phone } = this.props.userDetails;

        return (
               <form style={formStyle}>
                    <FormGroup
                        controlId="regUsername"
                        validationState={this.getValidationState()}>
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            readOnly={readonly}
                            type="text"
                            value={username}
                            placeholder="username"
                            onChange={(e) => this.props.dispatch(setUsername(e.target.value))}/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                        controlId="regBirthdate"
                        validationState={this.getValidationState()}>
                        <ControlLabel>Birthdate</ControlLabel>
                        <DatePicker disabled={readonly} value={birthdate} onChange={(value) => this.props.dispatch(setBirthdate(value))} />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                        controlId="regEmail"
                        validationState={this.getValidationState()}>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            readOnly={readonly}
                            type="email"
                            value={email}
                            placeholder="test@email.com"
                            onChange={(e) => this.props.dispatch(setEmail(e.target.value))}/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                        controlId="regPhone"
                        validationState={this.getValidationState()}>
                        <ControlLabel>Phone Number</ControlLabel>
                        <FormControl
                            readOnly={readonly}
                            type="text"
                            value={phone}
                            placeholder="555-5555"
                            onChange={(e) => this.props.dispatch(setPhone(e.target.value))}/>
                        <FormControl.Feedback />
                    </FormGroup>
                    {
                        register ? this.renderRegisterComponents() : null
                    }
                </form>
        );
    };
}

const styles = {
    formStyle: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        enabled: false
    }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps)(UserDetailForm);
/**
 * The RegisterForm component contains the registration form, requiring that the user enters in his/her details
 */

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory  } from 'react-router';
import { connect } from 'react-redux';

import UserDetailForm from '../common/UserDetailForm';
import { register } from '../../actions/userDetailActions';

class RegisterForm extends Component {
    /**
     * Handles the submission of the registration form
     */
    onSubmit(e) {
        this.props.dispatch(register(this.props.userDetails));
        browserHistory.push('profile');
    }

    render(){
        const { registerContainerStyle, titleStyle } = styles;

        return (
            <div style={registerContainerStyle}>
                <h1 style={titleStyle}>Registration</h1>
                <UserDetailForm register/>
                <Button onClick={this.onSubmit.bind(this)} 
                    bsStyle="primary" 
                    bsSize="large" block>Submit</Button>
            </div>
        );
    };
}

const styles = {
    registerContainerStyle: {
        flex: 1,
        margin: 10
    },

    titleStyle : {
        textAlign: 'center',
        color: '#337ab7'
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails : state.userDetails
    }
}

export default connect(mapStateToProps)(RegisterForm);
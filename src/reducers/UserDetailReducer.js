/**
 * This reducer handles the execution of actions that manipulate the store with regards to user details state
 */

const UserDetailReducer = (state = { }, action) => {
    switch (action.type) {
        case 'CHANGE_USERNAME':
            return {...state, username: action.payload};
        case 'CHANGE_BIRTHDATE':
            return {...state, birthdate: action.payload};
        case 'CHANGE_EMAIL':
            return {...state, email: action.payload};
        case 'CHANGE_PHONE':
            return {...state, phone: action.payload};
        case 'CHANGE_PASSWORD':
            return {...state, password: action.payload};
        case 'CHANGE_AGREED_TERMS':
            return {...state, agreedTerms: action.payload};
        case 'REGISTER_USER_PENDING':
            return state;
        case 'REGISTER_USER_FULFILLED':
            return action.payload;
        case 'REGISTER_USER_REJECTED':
            return {...state, error: action.payload};
        default:
            return state; 
    }
}

export default UserDetailReducer;
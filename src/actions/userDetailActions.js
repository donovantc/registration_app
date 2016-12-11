/**
 * All actions which can be perform on the user state data
 */

import { registerUser } from '../services/UserService';

export function setUsername(value){
    return {
        type: "CHANGE_USERNAME",
        payload: value
    };
}

export function setBirthdate(value){
    return {
        type: "CHANGE_BIRTHDATE",
        payload: value
    };
}

export function setEmail(value){
    return {
        type: "CHANGE_EMAIL",
        payload: value
    };
}

export function setPhone(value){
    return {
        type: "CHANGE_PHONE",
        payload: value
    };
}

export function setPassword(value){
    return {
        type: "CHANGE_PASSWORD",
        payload: value
    };
}

export function setAgreedTerms(value){
    return {
        type: "CHANGE_AGREED_TERMS",
        payload: value
    };
}

export function register(userDetails){
    return {
        type: "REGISTER_USER",
        payload: registerUser(userDetails)
    }
}
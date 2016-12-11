/**
 * This file contains all the functions and urls relating to the user service api
 * Note that for this demo, mockup promises are used to represent a request to the backend
 */

import axios from 'axios';
import data from '../mock/Onboarding.json'

const urls = {
    register: '/users/new',
    getOnboardingData : '/user/{userId}/onboarding/',
    setUserOnboarding : '/onboarding/'
}

export function registerUser(userDetails) {
    /* 
    *   This commented out section is how I would implement the
    *   the request if it wasn't a mock request
    */

    /*
        return axios.post(urls.register, userDetails);
    */
    
    return new Promise((resolve, reject) => {
        userDetails.id = 100; //Set just for mockup purposes
        resolve(userDetails);
    });
}

export function fetchUserOnboarding(userId) {
    /* 
    *   This commented out section is how I would implement the
    *   the request if it wasn't a mock request
    */

    /*
        return axios.get(urls.getOnboardingData.format(userId));
    */
    
    return new Promise((resolve, reject) => {
        resolve(data);
    });
}

export function setUserOnboarding(userId, step){
    /* 
    *   This commented out section is how I would implement the
    *   the request if it wasn't a mock request
    */

    /*
        return axios.post(urls.setUserOnboarding + userId,
            {
                "onboarding_step": step
            });
    */
    
    return new Promise((resolve,reject) => {
        resolve({
            onboarding_step: step
        });
    });
    
}
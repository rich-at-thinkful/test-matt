import fetch from 'isomorphic-fetch';

export const SET_SIGN_IN = 'SET_SIGN_IN';
export function setSignIn(bool) {
    return {
        type: SET_SIGN_IN,
        payload: bool,
    };
}
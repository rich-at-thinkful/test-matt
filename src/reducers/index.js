<<<<<<< HEAD
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';

const initialState = {
    isLoggedIn: false,
    currentUsername: null,
    currentPassword: null
}
=======
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// import './config';
// import App from './components/App';
// import './index.css';
>>>>>>> components

export default handleActions({
    [actions.SET_SIGN_IN]: (state, action) => {
        return { ...state, isLoggedIn: action.payload, error: null };
    }
})
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';

const initialState = {
    isLoggedIn: false,
    currentUsername: null,
    currentPassword: null
};

export default function theReducer(state = initialState, action) {
	switch(action.type) {
		case actions.SET_SIGN_IN:
			return Object.assign({}, state, {
				isLoggedIn: action.payload
			});

		default:
			return state;
	}
}
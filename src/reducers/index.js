import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';

const initialState = {
    isLoggedIn: false,
    currentUsername: null,
    currentPassword: null
}

export default handleActions({
    [actions.SET_SIGN_IN]: (state, action) => {
        return { ...state, isLoggedIn: action.payload, error: null };
    }
})
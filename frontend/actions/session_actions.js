import { postUser, postSession, deleteSession } from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

// regular action creator
const receiveCurrentUser = user => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user: user
    });
};

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    });
};

// thunk action creator

// create new user
// first arg 'formUser' is the data object from submitting form
// second arg 'dispatch' will be received from middleware
export const createNewUser = formUser => dispatch => {
    return postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));
}

// login user
export const login = formUser => dispatch => {
    return postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));
}

// logout user
export const logout = () => dispatch => {
    return deleteSession()
    .then(() => dispatch(logoutCurrentUser()));
}


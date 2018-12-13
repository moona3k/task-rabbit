import * as APIUtil from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

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

const receiveErrors = errors => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    });
};

// thunk action creator

// create new user
// first arg 'formUser' is the data object from submitting form
// second arg 'dispatch' will be received from middleware
export const signup = formUser => dispatch => {
    return APIUtil.postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user))
    ), err => (dispatch(receiveErrors(err.responseJSON))
    );
}

// login user
export const login = formUser => dispatch => {
    return APIUtil.postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user))
    ), err => (dispatch(receiveErrors(err.responseJSON))
    );
}

// logout user
export const logout = () => dispatch => {
    return APIUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()));
}


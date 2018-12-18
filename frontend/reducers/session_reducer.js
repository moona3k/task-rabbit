import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

// Default state
// Return { currentUser: null } POJO if there is no user is logged in
const _nullSession = {
    currentUser: {}
}

// Reducer takes in 2 args (previous state & action)
export default (state = _nullSession, action) => {
    Object.freeze(state);

    switch (action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.user });
            // Q: Can't we just return { currentUser: action.user }?
            // Why do we need to create a copy via Object.assign?
        
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        
        default:
            return state;
    }
};



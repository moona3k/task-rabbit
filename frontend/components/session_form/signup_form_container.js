import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "signup",
        navLink: <Link to="/login">Log in instead</Link>
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (formUser) => dispatch(signup(formUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

// import { connect } from 'react-redux';
// import { signup } from '../../actions/session_actions';
// // import action that we need to create new users
// import Signup from './signup';
// // import presentational component

// // mapStateToProps is not needed
// // because sign-up page does need to access any data from the global state

// const mapDispatchToProps = dispatch => {
//     return ({
//         signup: formUser => dispatch(signup(formUser))
//     })
// };
// // 'formUser' will be what is submitted via the form

// export default connect(null, mapDispatchToProps)(Signup);


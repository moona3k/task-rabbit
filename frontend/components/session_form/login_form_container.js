import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "login",
        navLink: <Link to="/signup">Sign up instead</Link>

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (formUser) => dispatch(login(formUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
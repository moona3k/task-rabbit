import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
// import action that we need to create new users
import Signup from './signup';
// import presentational component

// mapStateToProps is not needed
// because sign-up page does need to access any data from the global state

const mapDispatchToProps = dispatch => {
    return ({
        createNewUser: formUser => dispatch(createNewUser(formUser))
    })
};
// 'formUser' will be what is submitted via the form

export default connect(null, mapDispatchToProps)(Signup);


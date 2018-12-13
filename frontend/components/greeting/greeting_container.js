import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
    
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

// const mapStateToProps = ({ session, entities: { users } }) => {
//     return {
//         currentUser: users[session.id]
//     };
// };
// Object destructuring method

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
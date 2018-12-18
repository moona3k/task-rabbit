import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/routes_utils';

const App = () => {
    return (
        <div className="main-page">
            <header className="main-page-header">
                <div className="image"></div>
                <GreetingContainer />
            </header>

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
                
        </div>
    )
}

export default App;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

            <Switch>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
                
        </div>
    )
}

export default App;

// LoginForm Container
// SignupForm Container
// Dashboard Container
// TaskForm Container
// SplashPage


// import LoginFormContainer from './login_form_container';
// import SignupFormContainer from './signup_form_container';
// import DashboardContainer from './dashboard_container';
// import SplashPage from './splash_page';
// import TaskFormContainer from './task_form_container';

import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-route-dom';

export default () => {
    return (
        <div>
            <Route path='/signup' component={ SignupContainer } />
        </div>
    )
}
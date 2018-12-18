// This is the entry point

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { currentUser: {id: window.currentUser.id}},
            // session: { currentUser: window.currentUser }
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    // Q: What is considered a 'document'?
    // Does this parse through all the document to location id="root"?
    ReactDOM.render(<Root store={store}/>, root);
});




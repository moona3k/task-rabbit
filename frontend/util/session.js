// 3 methods (create new user, login user, logout user / ajax requests)
// Method name convention should follow the http request

// Create new user
// Send out POST request to UsersController
export const postUser = user => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    })
}

// return object is an AJAX promise object

// Login user (creates new session)
// Send out POST request to SessionController
export const postSession = user => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
}

// Logout user (deletes the session)
// Send out DELETE request to SessionController
export const deleteSession = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE',
    })
}
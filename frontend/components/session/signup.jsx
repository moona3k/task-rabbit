import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            zipcode: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/dashboard'));
            // redirect to '/dashboard' upon successful dispatch(createNewUser(formUser))
    }

    render(){
        return (
        <div className="session-form">
            <h2>Sign Up!</h2>
            <form>
                <label>First Name: 
                    <input 
                    type="text"
                    value={this.state.fname}
                    onChange={this.handleInput('fname')}
                    />
                </label>

                 <label>Last Name: 
                    <input 
                    type="text"
                    value={this.state.lname}
                    onChange={this.handleInput('lname')}
                    />
                </label>

                 <label>Email Address: 
                    <input 
                    type="text"
                    value={this.state.email}
                    onChange={this.handleInput('email')}
                    />
                </label>

                 <label>Password: 
                    <input 
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput('password')}
                    />
                </label>

                <label>Zip Code: 
                    <input 
                    type="text"
                    value={this.state.zipcode}
                    onChange={this.handleInput('zipcode')}
                    />
                </label>
                
                <button onClick={this.handleSubmit}>Sign Up!</button>
            </form>
        </div>
        );
    }
};

export default Signup;
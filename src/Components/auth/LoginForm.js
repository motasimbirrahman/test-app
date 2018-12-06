import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {
                email: "",
                password: ""
            },
            errors: {}
        }
    }

    validate = () => {
        const errors = {};
        const { account } = this.state;

        if (account.email.trim() === "")
            errors.email = "Email is required.";

        if (account.password.trim() === "")
            errors.password = "Password is required.";

        return Object.keys(errors).length === 0 ? null : errors;

    }

    handleSubmit = (event) => {
        event.preventDefault()

        const errors = this.validate();
        this.setState({
            errors
        })
        console.log(errors);
    }




    render() {
        return (
            <div className="login-form">
                <h3>Login</h3>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email1">Email</label>
                        <input
                            name="email"
                            type="email" className="form-control login-input" id="email1" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            type="password" className="form-control login-input" id="password" placeholder="Enter Password" />
                    </div>
                    <div className="forgot-password ">
                        <Link to="/reset/password">Forgot password?</Link>
                    </div>
                    <button type="submit" className="btn btn-secondary login-button">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'


class Registration extends Component {
    render() {
        return (
            <div className="registration-form">
                <h2>Registration</h2>
                <hr />
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control registration-input" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control registration-input" id="email" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control registration-input" id="password" autoComplete="off" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="c_password">Confirm Password</label>
                        <input type="password" className="form-control registration-input" id="c_password" autoComplete="off" placeholder="Confirm Password" />
                    </div>
                    <button className=" btn btn-secondary registration-button">Registered</button>
                    <div className="Already_login">
                        <Link to="/login">Already Registered?</Link>
                    </div>

                </form>
            </div>
        );
    }
}

export default Registration;
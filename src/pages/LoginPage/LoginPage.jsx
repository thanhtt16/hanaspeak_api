import React from 'react';
import { connect } from 'react-redux';
import './login.css'

import { userActions } from '../../_actions/index';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="login">
                <div className="content">
                    <form className="login-form" onSubmit={this.handleSubmit} method="post" >
                        <h3 className="form-title">Sign In</h3>
                        <div className="alert alert-danger display-hide">
                            <button className="close" data-close="alert"></button>
                            <span> Enter any username and password. </span>
                        </div>
                        <div className="form-group">
                            <label className="control-label visible-ie8 visible-ie9">Username</label>
                            <input className="form-control form-control-solid placeholder-no-fix" type="text"
                                   autoComplete="off" placeholder="Username" name="username" value={username} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label visible-ie8 visible-ie9">Password</label>
                            <input className="form-control form-control-solid placeholder-no-fix" type="password"
                                   autoComplete="off" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn btn-success uppercase">Login</button>
                            <label className="rememberme check">
                                <input type="checkbox" name="remember" value="1"/>Remember </label>
                            <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions/index';
import $ from 'jquery';
import 'jquery-validation'

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
    }
    componentDidMount(){
        this.validateLoginForm();
    }
    validateLoginForm(){
        const app = this;
        $(this.loginForm).validate({
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // some other code
                // maybe disabling submit button
                // then:
                app.handleSubmit(form);
            }
        });
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(form) {
        const { username, password } = this.state;
        const { dispatch } = this.props;
        dispatch(userActions.login(username, password));
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="page-container login-container">
                <div className="page-content">
                    <div className="content-wrapper">
                        <div className="content">
                            <form ref={c => { this.loginForm = c }} method="post">
                                <div className="panel panel-body login-form">
                                    <div className="text-center">
                                        <h5 className="content-group-lg">Login to your account <small className="display-block">Enter your credentials</small></h5>
                                    </div>

                                    <div className="form-group has-feedback has-feedback-left">
                                        <div className="form-control-feedback">
                                            <i className="icon-user text-muted"></i>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Username" name="username"
                                               value={username} onChange={this.handleChange}/>

                                    </div>

                                    <div className="form-group has-feedback has-feedback-left">
                                        <div className="form-control-feedback">
                                            <i className="icon-lock2 text-muted"></i>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Password" name="password"
                                               value={password} onChange={this.handleChange}/>

                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn bg-blue btn-block">Login <i className="icon-arrow-right14 position-right"></i></button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
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
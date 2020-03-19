import { ErrorMessage, Field, Form, Formik } from "formik";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import './Login.scss';
import userService from "../../services/user.service";
import cookie from 'react-cookies';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submitting: false
        };
    }
    send(values) {
        this.setState({ submitting: true });
        userService
            .login(values.email, values.password)
            .then(response => response.json())
            .then(response => {
                const twoWeeksTime = 60 * 60 * 24 * 14;
                cookie.save('user', response.token, { path: '/', maxAge: twoWeeksTime });
                this.setState({ submitting: false });
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="form_container">
                <div className="login_form">
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={this.send.bind(this)}>
                        <Form id="login-form" className="form" action="" method="post">
                            <label className="form_title">Login</label>
                            <div className="form-group">
                                <label>Email:</label>
                                <Field name="email" type="text" className="input" />
                                <ErrorMessage name="email" component="div" className="alert" />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <Field name="password" type="password" className="input" />
                            </div>
                            <div>
                                <input type="submit"
                                    value={this.state.submitting ? 'Logging...' : 'Login'}
                                    className="btn"
                                    disabled={this.state.submitting} />
                            </div>
                            <div className="register_link">
                                <p>Don't have an account yet?</p>
                                <Link to="/register">Register here</Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className="form_photo"></div>

            </div>
        );
    }
}
export default Login;
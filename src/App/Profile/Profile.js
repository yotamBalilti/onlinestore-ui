import React, { Component } from 'react';
import UserService from '../../services/user.service';
import User from '../../models/user';
import './Profile.scss';
import { ErrorMessage, Field, Form, Formik } from "formik";

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        };
    }

    componentDidMount() {
        UserService
            .me()
            .then(response => response.json())
            .then(user => {
                console.log(user)
                this.setState({
                    profile: user
                });
            });
    }


    render() {
        return (
            <div className="profile_page">
                <div className="profile_container form_container">
                    <div className="profile_form_photo photo_left"></div>
                    <div className="profile_form">
                        <Formik
                            initialValues={{ name: '', email: '', password: '', age: '' }}
                            validationSchema={User}>
                            <Form>
                                <label className="form_title profile_title">Welcome {this.state.profile.name}</label>
                                <div className="form-group profile_form-group">
                                    <label>Name:</label>
                                    <Field name="name" type="text" className="form-control profile_form-control" placeholder={this.state.profile.name} />
                                </div>
                                <div className="form-group profile_form-group">
                                    <label>Email:</label>
                                    <Field name="email" type="text" className="form-control" placeholder={this.state.profile.email} />
                                    <ErrorMessage name="email" component="div" className="alert alert-danger"
                                    />
                                </div>
                                <div className="form-group profile_form-group">
                                    <label>Password:</label>
                                    <Field name="password" type="text" className="form-control" placeholder={this.state.profile.password} />
                                </div>
                                <div className="form-group profile_form-group">
                                    <label>Age:</label>
                                    <Field name="age" type="text" className="form-control" placeholder={this.state.profile.age} />
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className="profile_form_photo photo_right"></div>
                </div>
                {/* <h1>Welcome {this.state.profile.name}</h1>
                        <h4>your Email is {this.state.profile.email}</h4>
                        <h4>and you are {this.state.profile.age} years old</h4>
                        <h4>if you want to change any of these details please click here</h4> */}

            </div>
        )
    }
}

export default Profile;

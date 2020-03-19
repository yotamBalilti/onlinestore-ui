import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import User from '../../models/user';
import './Register.scss';
import userService from '../../services/user.service';

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			submitting: false
		};
	}

	send(values) {
		this.setState({ submitting: true });
		userService
			.register(values)
			.then(() => {
				this.setState({ submitting: false });
				this.props.history.push('/login');
			});
	}

	render() {
		return (
			<div className="form_container">
				<div className="register_form">
					<Formik
						initialValues={{ name: '', email: '', password: '', age: '' }}
						validationSchema={User}
						onSubmit={this.send.bind(this)}>
						<Form>
							<label className="form_title">Register</label>
							<div className="form-group">
								<label>Name:</label>
								<Field name="name" type="text" className="form-control" placeholder="Name" />
							</div>
							<div className="form-group">
								<label>Email:</label>
								<Field name="email" type="text" className="form-control" />
								<ErrorMessage name="email" component="div" className="alert alert-danger" placeholder="Email" />
							</div>
							<div className="form-group">
								<label>Password:</label>
								<Field name="password" type="text" className="form-control" placeholder="Password" />
							</div>
							<div className="form-group">
								<label>Age:</label> 
								<Field name="age" type="text" className="form-control" placeholder="Age" />
							</div>
							<div>
								<input type="submit"
									value="Submit"
									className="btn btn-primary"
									disabled={this.state.submitting} />
							</div>
						</Form>
					</Formik>
				</div>
				<div className="form_photo"></div>
			</div>
		);
	}
}

export default Register;
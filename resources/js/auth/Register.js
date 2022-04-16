import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Btn from '../components/Btn';

const Register = (props) => {

	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [phone, setPhone] = useState()

	const onRegister = (e) => {
		e.preventDefault()

		axios.get('/sanctum/csrf-cookie').then(() => {
			// Register User
			axios.post(`${props.url}/api/register`, {
				name: name,
				email: email,
				phone: phone,
				password: phone,
				password_confirmation: phone,
			}).then((res) => {
				props.setMessage("Account created")
				// Update auth data
				axios.get(`${props.url}/api/home`)
					.then((res) => props.setAuth(res.data))
				// Redirect user
				// setTimeout(() => history.push('/'), 1000)
			}).catch((err) => {
				const resErrors = err.response.data.errors
				var resError
				var newError = []
				for (resError in resErrors) {
					newError.push(resErrors[resError])
				}
				// Get other errors
				newError.push(err.response.data.message)
				props.setErrors(newError)
			});
		});
	}

	return (
		<div className="row">
			<div className="col-sm-4"></div>
			<div className="col-sm-4">
				<div className="card m-2">
					<div className="card-header">
						<h4>Register</h4>
					</div>

					<div className="card-body contact-form">
						<form onSubmit={onRegister}>
							<label htmlFor="name">
								<p>Name</p>
							</label>

							<input
								id="name"
								type="text"
								className="form-control"
								name="name"
								placeholder="John Doe"
								onChange={(e) => setName(e.target.value)}
								required />
							<br />

							<label htmlFor="email">
								<p>Email</p>
							</label>

							<input
								id="email"
								type="text"
								className="form-control"
								name="email"
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}
								required />
							<br />

							<label htmlFor="phone">
								<p>Enter your Mpesa number</p>
							</label>

							<input
								id="phone"
								type="text"
								className="form-control"
								name="phone"
								placeholder="07"
								onChange={(e) => setPhone(e.target.value)}
								required />
							<br />

							<div className="form-group row mb-0">
								<div className="col-md-8 offset-md-4">
									<Btn
										btnClass="btn btn-success onesoko-btn float-right"
										text="register" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="col-sm-4"></div>
		</div>
	)
}

export default Register
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

import Btn from '../components/Btn';

const Register = (props) => {

	let { name, email, avatar } = useParams();

	const [phone, setPhone] = useState()

	// Remove all spaces from avatar
	avatar = avatar.replace(/\s/g, "/")

	const onRegister = (e) => {
		e.preventDefault()

		axios.get('/sanctum/csrf-cookie').then(() => {
			// Register User
			axios.post(`${props.url}/api/register`, {
				name: name,
				email: email,
				phone: phone,
				profile_picture: avatar,
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
				<h3 style={{ textAlign: "center" }}>You're almost done</h3>
				<br />
				<div className="card m-2">
					<div className="card-header">
						<h4>Register your phone number</h4>
					</div>

					<div className="card-body contact-form">
						<form onSubmit={onRegister}>
							<label htmlFor="phone">
								<p>Enter your Mpesa number</p>
							</label>

							<input
								id="phone"
								type="text"
								className="form-control"
								name="phone"
								placeholder="0700123456"
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
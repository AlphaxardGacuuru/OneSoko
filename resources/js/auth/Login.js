import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Btn from '../components/Btn';
import {
	GoogleLoginButton,
	FacebookLoginButton,
	TwitterLoginButton
} from "react-social-login-buttons";

const Login = (props) => {

	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState('07')

	const history = useHistory()

	const onSubmit = (e) => {
		e.preventDefault()

		axios.get('/sanctum/csrf-cookie').then(() => {
			axios.post(`${props.url}/api/login`, {
				email: email,
				phone: phone,
				password: phone,
				password_confirmation: phone,
				remember: 'checked'
			}).then((res) => {
				props.setMessage("Logged in")
				// Update Logged in user
				axios.get(`${props.url}/api/home`)
					.then((res) => props.setAuth(res.data))
				// Redirect and reload page
				// setTimeout(() => {
				// 	history.push('/')
				// 	location.reload()
				// }, 1000)
			}).catch((err) => {
				console.log(err.response)
				const resErrors = err.response.data.errors
				// Get validation errors
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

		setPhone('07')
	}
	return (
		<div className="row">
			<div className="col-sm-4"></div>
			<div className="col-sm-4">
				<div className="card m-2">
					<div className="card-header">
						<h4>Login</h4>
					</div>

					<div className="card-body contact-form">
						<GoogleLoginButton
							className="mt-2 pl-3"
							style={{ borderRadius: "30px" }}
							onClick={() => onSocial("google")} />
						<TwitterLoginButton
							className="mt-2 pl-3"
							style={{ borderRadius: "30px" }}
							onClick={() => onSocial("twitter")} />
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

						<form method="POST" action="" onSubmit={onSubmit}>
							<label htmlFor="phone">
								<p>Phone</p>
							</label>

							<input
								id="phone"
								type="text"
								className="form-control"
								name="phone"
								placeholder="Phone"
								onChange={(e) => setPhone(e.target.value)}
								required />
							<br />


							<div className="form-group row mb-0">
								<div className="col-md-8 offset-md-4">
									<Btn
										type="submit"
										btnClass="btn btn-success onesoko-btn float-right"
										text="login" />
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

export default Login
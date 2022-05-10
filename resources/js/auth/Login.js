import React from 'react'

import {
	GoogleLoginButton,
	FacebookLoginButton,
	TwitterLoginButton
} from "react-social-login-buttons";

const Login = (props) => {

	const onSocial = (website) => {
		window.location.href = `${props.url}/api/login/${website}`
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
					</div>
				</div>
			</div>
			<div className="col-sm-4"></div>
		</div>
	)
}

export default Login
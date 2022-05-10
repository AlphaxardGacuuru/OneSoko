import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Img from "../components/Img";

const TopNav = (props) => {

	const [menu, setMenu] = useState("")

	const location = useLocation()

	const logout = (e) => {
		e.preventDefault()

		axios.get('/sanctum/csrf-cookie').then(() => {
			axios.post(`${props.url}/api/logout`)
				.then((res) => {
					// Remove phone from localStorage
					props.setMessage("Logged out")
					// Update Auth
					props.setAuth({
						"name": "Guest",
						"pp": "profile-pics/male_avatar.png",
					})
				});
		})
	}

	// Function to get to Privacy Policy
	const onPrivacyPolicy = () => window.location.href = "https://www.iubenda.com/privacy-policy/38639633"

	var display

	// Hide TopNav from various pages
	location.pathname.match("/login") ?
		display = "none" : display = ""
		
	return (
		<div style={{ display: display }}>
			<div className="d-flex justify-content-between top-nav">
				<div className="p-2 flex-grow-1">
					<Link to="/" className="text-light">One Soko</Link>
				</div>

				{!props.auth.name ?
					<div className="p-2">
						<Link to="/login" className="p-2 text-light">Login</Link>
					</div> :
					<div className="p-2 dropdown">
						{/* Avatar Dropdown */}
						<Link
							to="#"
							role="button"
							id="dropdownMenua"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<Img
								src={props.auth.profile_picture}
								imgClass={"rounded-circle"}
								width="25px"
								height="25px"
								alt="Avatar" />
						</Link>
						<div
							className="dropdown-menu dropdown-menu-right m-0 p-0"
							aria-labelledby="dropdownMenuButton">
							<Link to={`/account/props.auth.username`} className="p-3 dropdown-item border-bottom">
								<h5>{props.auth.name}</h5>
							</Link>
							{/* <Link
							to="#"
							ref={btnAdd}
							style={{ display: "none" }}
							className="p-3 dropdown-item border-bottom">
							<h6>Get App</h6>
						</Link> */}
							<Link to='/post-create' className="p-3 dropdown-item border-bottom">
								<h6>Advertise</h6>
							</Link>
							<Link to='/settings' className="p-3 dropdown-item border-bottom">
								<h6>Settings</h6>
							</Link>
							<Link
								to="#"
								className="p-3 dropdown-item border-bottom"
								title="Privacy Policy"
								onClick={onPrivacyPolicy}>
								<h6>Privacy Policy</h6>
							</Link>
							<Link
								to="#"
								className="p-3 dropdown-item"
								onClick={logout}>
								<h6>Logout</h6>
							</Link>
						</div>
					</div>}
				<div
					className="p-2 text-light"
					style={{ cursor: "pointer" }}
					onClick={() => setMenu("menu-open")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						className="bi bi-list"
						viewBox="0 0 16 16">
						<path fillRule="evenodd"
							d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
					</svg>
				</div>
			</div>
			<br />
			<br />

			<nav className={`mainMenu text-white ${menu}`}>
				{/* <!-- Close Icon --> */}
				<div
					className="closeIcon float-right text-light"
					style={{ cursor: "pointer" }}
					onClick={() => setMenu("")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						fill="currentColor"
						className="bi bi-x"
						viewBox="0 0 16 16">
						<path
							d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
					</svg>
				</div>
				<br />
				<div className="d-flex justify-content-between">
					<div>Home</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Vehicles</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>

					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Property</div>
					<div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>

					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Mobile Phones & Tablets</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Electronics</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Home, Furniture & Appliances</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Health & Beauty</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Fashion</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Sports, Arts & Outdoors</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Seeking Work CVs</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Services</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Jobs</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Babies & Kids</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Animals & Pets</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Agriculture & Food</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Commercial Equipment & Tools</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
				<div className="d-flex justify-content-between">
					<div>Repair & Construction</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default TopNav
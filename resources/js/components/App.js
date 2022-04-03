import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'

import TopNav from './TopNav';

import Index from '../pages/Index'
import AdShow from '../pages/AdShow';
import AdCreate from '../pages/AdCreate';

function App() {

	const url = window.location.href.match(/https/) ?
		'https://music.black.co.ke' :
		'http://localhost:8001'

	axios.defaults.baseURL = url

	// Function for checking local storage
	const getLocalStorage = (state) => {
		if (localStorage.getItem(state)) {
			return JSON.parse(localStorage.getItem(state))
		} else {
			return []
		}
	}

	// Function to set local storage
	const setLocalStorage = (state, data) => {
		localStorage.setItem(state, JSON.stringify(data))
	}

	// Declare states
	const [login, setLogin] = useState()
	const [auth, setAuth] = useState(localStorage.getItem("auth") ?
		JSON.parse(localStorage.getItem("auth")) :
		{
			"name": "Guest",
			"username": "@guest",
			"pp": "/storage/profile-pics/male_avatar.png",
			"account_type": "normal"
		})
	const [message, setMessage] = useState('')
	const [errors, setErrors] = useState([])

	const [ads, setAds] = useState([])


	// Fetch data on page load
	useEffect(() => {
		// Fetch Ads
		axios.get(`/api/ads`)
			.then((res) => {
				setAds(res.data)
			}).catch(() => setErrors(["Failed to fetch ads"]))

		console.log("effect rendered")

	}, [])

	const GLOBAL_STATE = {
		url,
		login, setLogin,
		auth, setAuth,
		message, setMessage,
		errors, setErrors,
		ads, setAds,
	}

	return (
		<Router>
			<TopNav {...GLOBAL_STATE} />
			<Route path="/" exact render={(props) => (<Index {...GLOBAL_STATE} />)} />
			<Route path="/ad/:id" exact render={(props) => (<AdShow {...GLOBAL_STATE} />)} />
			<Route path="/ad-create" exact render={(props) => (<AdCreate {...GLOBAL_STATE} />)} />
		</Router>
	);
}

export default App;

if (document.getElementById('app')) {
	ReactDOM.render(<App />, document.getElementById('app'));
}

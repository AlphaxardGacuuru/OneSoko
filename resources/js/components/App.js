import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import TopNav from './TopNav';
import Messages from './Messages';
import Footer from './Footer';

import Login from '../auth/Login';

import Index from '../pages/Index'
import Account from '../pages/Account'

import PostShow from '../pages/PostShow';
import PostCreate from '../pages/PostCreate';
import PostEdit from '../pages/PostEdit';

function App() {

	const url = window.location.href.match(/https/) ?
		'https://www.onesoko.co.ke' :
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
	const [auth, setAuth] = useState([])
	const [message, setMessage] = useState('')
	const [errors, setErrors] = useState([])

	const [posts, setPosts] = useState([])

	// Reset Messages and Errors to null after 3 seconds
	if (errors.length > 0 || message.length > 0) {
		setTimeout(() => setErrors([]), 3000);
		setTimeout(() => setMessage(''), 3000);
	}


	// Fetch data on page load
	useEffect(() => {
		// Fetch Auth
		axios.get('api/home')
			.then((res) => setAuth(res.data))
			.catch(() => setErrors(["Failed to fetch Auth"]))

		// Fetch Posts
		axios.get(`/api/posts`)
			.then((res) => {
				setPosts(res.data)
			}).catch(() => setErrors(["Failed to fetch posts"]))

		console.log("effect rendered")

	}, [])

	const GLOBAL_STATE = {
		getLocalStorage, setLocalStorage,
		url,
		login, setLogin,
		auth, setAuth,
		message, setMessage,
		errors, setErrors,
		posts, setPosts,
	}

	return (
		<Router>
			<TopNav {...GLOBAL_STATE} />
			<Route path="/login" exact render={(props) => (<Login {...GLOBAL_STATE} />)} />

			<Route path="/" exact render={(props) => (<Index {...GLOBAL_STATE} />)} />
			<Route path="/account/:id" exact render={(props) => (<Account {...GLOBAL_STATE} />)} />

			<Route path="/post/:id" exact render={(props) => (<PostShow {...GLOBAL_STATE} />)} />
			<Route path="/post-create" exact render={(props) => (<PostCreate {...GLOBAL_STATE} />)} />
			<Route path="/post-edit/:id" exact render={(props) => (<PostEdit {...GLOBAL_STATE} />)} />

			<Messages {...GLOBAL_STATE} />
			<Footer />
		</Router>
	);
}

export default App;

if (document.getElementById('app')) {
	ReactDOM.render(<App />, document.getElementById('app'));
}
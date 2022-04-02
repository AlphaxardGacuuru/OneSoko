import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'
import AdShow from '../pages/AdShow';

import Index from '../pages/Index'
import TopNav from './TopNav';

function App() {

	const GLOBAL_STATE = {}

	return (
		<Router>
			<TopNav {...GLOBAL_STATE} />
			<Route path="/" exact render={(props) => (<Index {...GLOBAL_STATE} />)} />
			<Route path="/ad/:id" exact render={(props) => (<AdShow {...GLOBAL_STATE} />)} />
		</Router>
	);
}

export default App;

if (document.getElementById('app')) {
	ReactDOM.render(<App />, document.getElementById('app'));
}

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/Navigation';
import { Jumbotron } from './components/Jumbotron';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<>
				<NavigationBar />
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Layout></Layout>
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;

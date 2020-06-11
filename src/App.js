import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/Navigation';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { LoggedInNav } from './components/LoggedInNav';
import LoggedInHome from './components/LoggedInHome';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logged_in: localStorage.getItem('token') ? true : false,
			username: '',
			walks: [],
		};
	}

	componentDidMount() {
		if (this.state.logged_in) {
			fetch('http://localhost:8000/core/current_user/', {
				headers: {
					Authorization: `JWT ${localStorage.getItem('token')}`,
				},
			})
				.then((res) => res.json())
				.then((json) => {
					this.setState({ username: json.username });
				});
		}
	}

	handle_login = (e, data) => {
		e.preventDefault();
		fetch('http://localhost:8000/token-auth/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((json) => {
				localStorage.setItem('token', json.token);
				this.setState({
					logged_in: true,
					displayed_form: '',
					username: json.user.username,
				});
			});
		return <Redirect to='/home' />;
	};

	handle_signup = (e, data) => {
		e.preventDefault();
		fetch('http://localhost:8000/core/users/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((json) => {
				localStorage.setItem('token', json.token);
				this.setState({
					logged_in: true,
					displayed_form: '',
					username: json.username,
				});
			});
		return <Redirect to='/home' />;
	};

	handle_logout = () => {
		localStorage.removeItem('token');
		this.setState({ logged_in: false, username: '' });
		return <Redirect to='/home' />;
	};

	render() {
		return (
			<>
				<div style={{ display: this.state.logged_in ? 'none' : 'block' }}>
					<NavigationBar />
				</div>
				<div style={{ display: this.state.logged_in ? 'block' : 'none' }}>
					<LoggedInNav
						logout={this.handle_logout}
						handle_logout={this.handle_logout}
						username={this.state.username}
					/>
				</div>
				<Router>
					<Switch>
						<Route exact={true} path='/' component={Home} />
						<Route
							exact
							path='/login'
							render={() => {
								return (
									<LoginForm
										logged_in={this.state.logged_in}
										handle_login={this.handle_login}
									/>
								);
							}}
						/>
						<Route
							exact
							path='/signup'
							render={() => {
								return (
									<SignupForm
										logged_in={this.state.logged_in}
										handle_signup={this.handle_signup}
									/>
								);
							}}
						/>
						<Route
							exact={true}
							path='/home'
							render={() => {
								return <LoggedInHome />;
							}}
						/>
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;

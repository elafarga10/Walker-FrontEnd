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
import axios from 'axios';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logged_in: localStorage.getItem('token') ? true : false,
			username: '',
			walks: null,
			error: false,
			errormessage: null,
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

	getWalks = () => {
		axios
			.get(`http://localhost:8000/api/`)
			.then((res) => {
				this.setState({ walks: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
			})
			.then((res) => {
				this.get_walks();
			})
			.catch((err) => {
				this.setState({ error: true });
				this.handle_login_errors();
			});
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
			})
			.then((res) => {
				this.get_walks();
			})
			.catch((err) => {
				this.setState({ error: true });
				this.handle_signup_error();
			});
		return <Redirect to='/home' />;
	};

	handle_logout = () => {
		localStorage.removeItem('token');
		this.setState({ logged_in: false, username: '', walks: null });
		return <Redirect to='/home' />;
	};
	handle_signup_error = () => {
		if (this.state.error) {
			this.setState({
				errormessage: 'That username already exists, please try another one.',
			});
		}
		return <Redirect to='/signup' />;
	};

	handle_login_errors = () => {
		if (this.state.error) {
			this.setState({
				errormessage: 'That username and password combination does not exist.',
			});
		}
		return <Redirect to='/login' />;
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
						<Route
							exact={true}
							path='/'
							render={() => {
								return (
									<Home
										username={this.state.username}
										logged_in={this.state.logged_in}
										walks={this.state.walks}
										getWalks={this.getWalks}
									/>
								);
							}}
						/>
						<Route
							exact
							path='/login'
							render={() => {
								return (
									<LoginForm
										logged_in={this.state.logged_in}
										handle_login={this.handle_login}
										errormessage={this.state.errormessage}
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
						{/* <Route
							exact={true}
							path='/home'
							render={() => {
								return <LoggedInHome walks={this.state.walks} logged_in={this.state.logged_in}/>;
							}}
						/> */}
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;

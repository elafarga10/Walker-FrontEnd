import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
class SignupForm extends React.Component {
	state = {
		username: '',
		password: '',
		error: false,
		errormessage: null,
	};

	handle_change = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState((prevstate) => {
			const newState = { ...prevstate };
			newState[name] = value;
			return newState;
		});
		this.check_username();
	};

	check_username = () => {
		if (this.state.username.length < 4) {
			this.setState({ errormesage: 'Username must be 4 characters or longer' });
		}
	};

	render(props) {
		if (this.props.logged_in) {
			return <Redirect to='/' />;
		}
		return (
			<>
				<Form>
					<Form.Group>
						<Form.Label htmlFor='username'>Username</Form.Label>
						<Form.Control
							type='text'
							name='username'
							value={this.state.username}
							onChange={this.handle_change}></Form.Control>
					</Form.Group>
					<Form.Group controlId='formBasicPassword'>
						<Form.Label htmlFor='password'>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							value={this.state.password}
							onChange={this.handle_change}></Form.Control>
					</Form.Group>
					<Button onClick={(e) => this.props.handle_signup(e, this.state)}>
						Submit
					</Button>
				</Form>
				<div
					style={{
						display: this.state.errormessage === null ? 'none' : 'block',
					}}>
					{this.state.errormessage}
				</div>
				{/* <form onSubmit={(e) => this.props.handle_signup(e, this.state)}>
					<h4>Sign Up</h4>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						name='username'
						value={this.state.username}
						onChange={this.handle_change}
					/>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						value={this.state.password}
						onChange={this.handle_change}
					/>
					<input type='submit' />
				</form>
				<div style={{display: this.state.errormessage === null ? 'none' : 'block'}}>
					{this.state.errormessage}
				</div> */}
			</>
		);
	}
}

export default SignupForm;

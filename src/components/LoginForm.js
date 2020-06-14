import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';


let Styles = styled.div`
	.username {
		margin-top: 25px;
		width: 100%;
	}
	.card {
		
	}
`;

class LoginForm extends React.Component {
	state = {
		username: '',
		password: '',
	};

	handle_change = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState((prevstate) => {
			const newState = { ...prevstate };
			newState[name] = value;
			return newState;
		});
	};

	render(props) {
		if (this.props.logged_in) {
			return <Redirect to='/' />;
		}
		return (
			<Styles>
				<Card>
					<Form>
						<Form.Group className='username'>
							<Form.Label htmlFor='username'>Username</Form.Label>
							<Form.Control
								type='text'
								name='username'
								value={this.state.username}
								onChange={this.handle_change}></Form.Control>
						</Form.Group>
						<Form.Group className='password' controlId='formBasicPassword'>
							<Form.Label htmlFor='password'>Password</Form.Label>
							<Form.Control
								type='password'
								name='password'
								value={this.state.password}
								onChange={this.handle_change}></Form.Control>
						</Form.Group>
						<Button onClick={(e) => this.props.handle_login(e, this.state)}>
							Submit
						</Button>
					</Form>
					<div style={{ display: this.props.errormessage ? 'block' : 'none' }}>
						{this.props.errormessage}
					</div>
				</Card>

				{/* <div className='auth-forms'>
					<form onSubmit={(e) => this.props.handle_login(e, this.state)}>
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
						<input className='submit-button' type='submit' value='LOG IN' />
					</form>
				</div>
				<div style={{ display: this.props.errormessage ? 'block' : 'none' }}>
					{this.props.errormessage}
				</div> */}
			</Styles>
		);
	}
}

export default LoginForm;

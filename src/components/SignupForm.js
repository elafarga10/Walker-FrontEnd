import React from 'react';
import { Redirect } from 'react-router-dom';
import {
	Form,
	Button,
	Card,
	Jumbotron as Jumbo,
	Container,
} from 'react-bootstrap';
import styled from 'styled-components';
import dogwalking from '../images/dog-walking2.jpg';

let Styles = styled.div`
	.username {
		margin-top: 25px;
		margin-left: 75px;
		margin-right: 75px;
		width: 65%;
	}

	.password {
		margin-top: 25px;
		margin-left: 75px;
		margin-right: 75px;
		width: 65%;
	}
	.signup {
		text-align: center;
		font-weight: Bold;
		color: #000;
	}
	.submit {
		padding-top: 35px;
		margin-left: 155px;
		margin-right: 155px;
	}
	.card {
		padding: 70px 0;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		width: 400px;
	}
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 150px;
	}

	.jumbo {
		background: url(${dogwalking}) no-repeat fixed bottom;
		background-size: cover;
		color: #efefef;
		height: 100vh;
		width: 100%;
		position: absolute;
		z-index: -2;
		margin-bottom: 0px;
	}
	.overlay {
		background-color: #000;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}
	p {
		color: #000;
		text-align: center;
		font-size: 13px;
	}
`;
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
			<Styles>
				<Jumbo fluid className='jumbo'>
					<div className='overlay'></div>
					<Container>
						<div className='content'>
							<Card>
								<Card.Title className='signup'>Sign Up!</Card.Title>
								<Form>
									<Form.Group className='username'>
										<div className='box1'>
											<Form.Control
												type='text'
												placeholder='Username'
												name='username'
												value={this.state.username}
												onChange={this.handle_change}></Form.Control>
										</div>
									</Form.Group>
									<Form.Group
										className='password'
										controlId='formBasicPassword'>
										<Form.Control
											type='password'
											name='password'
											placeholder='Password'
											value={this.state.password}
											onChange={this.handle_change}></Form.Control>
									</Form.Group>
									<div>
										<p>
											<a href='/login'>Already have an account?</a>
										</p>
									</div>
									<div className='submit'>
										<Button
											onClick={(e) => this.props.handle_signup(e, this.state)}>
											Submit
										</Button>
									</div>
								</Form>
								<div
									style={{
										display: this.props.errormessage ? 'block' : 'none',
									}}>
									{this.props.errormessage}
								</div>
							</Card>
						</div>
					</Container>
				</Jumbo>
			</Styles>
		);
	}
}

export default SignupForm;

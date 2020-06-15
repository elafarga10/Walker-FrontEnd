import React from 'react';
import { Nav, Navbar, Button, Modal, Form } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.navbar {
		height: 55px;
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		margin-bottom: 0px;
	}
	.item {
		margin-right: 20px;
		color: #5f9ea0;
		font-weight: bold;
	}

	.item:hover {
		color: black;
	}

	.button {
		font-weight: bold;
	}

	a,
	.navbar-nav .nav-link {
		color: #5f9ea0;
		font-size: 16px;
		font-weight: bold;
		&:hover {
			color: black;
		}
	}
	.navbar-nav {
		margin-right: 100px;
	}

	.navbar-brand {
		margin-left: 120px;
		color: #5f9ea0;
		&:hover {
			color: black;
		}
	}
`;

class LoggedInNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			setShow: false,
			distance: '',
			time: '',
			weight: '',
		};
	}
	handleClose = () => {
		this.setState({ show: false });
	};

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	handleShow = () => {
		this.setState({ show: true });
	};

	handleSubmit = (evt) => {
		evt.preventDefault();

		const walk = {
			distance: this.state.distance,
			time: this.state.time,
			weight: this.state.weight,
		};
		fetch('http://localhost:8000/api/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `JWT ${localStorage.getItem('token')}`,
			},
			body: JSON.stringify(walk),
		})
			.then((res) => {
				this.handleClose();
			})
			.then(res => {
				this.props.getWalks();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<Styles>
				<Navbar expand='lg'>
					<Navbar.Brand href='/'>Walker</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Item className='item'>
								<Button variant='outline-light' href='/'>
									Welcome,{' '}
									{this.props.username}
								</Button>
							</Nav.Item>
							<Nav.Item className='item'>
								<Button
									className='item'
									variant='outline-light'
									onClick={this.handleShow}>
									Add Walk
								</Button>
							</Nav.Item>
							<Nav.Item className='item'>
								<Button
									variant='outline-light'
									onClick={this.props.handle_logout}
									href='/'>
									Logout
								</Button>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add Walk</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group>
								<Form.Label>Distance (in miles)</Form.Label>
								<Form.Control
									type='text'
									name='distance'
									onChange={this.handleChange}
									placeholder='How far did you walk?'
									value={this.state.distance}></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Time (in minutes)</Form.Label>
								<Form.Control
									type='text'
									name='time'
									onChange={this.handleChange}
									value={this.state.time}
									placeholder='How long did it take you?'></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Weight (in pounds)</Form.Label>
								<Form.Control
									type='text'
									name='weight'
									onChange={this.handleChange}
									placeholder='What is your dogs weight currently?'
									value={this.state.weight}></Form.Control>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={this.handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={this.handleSubmit}>
							Create Walk
						</Button>
					</Modal.Footer>
				</Modal>
			</Styles>
		);
	}
}
export default LoggedInNav;

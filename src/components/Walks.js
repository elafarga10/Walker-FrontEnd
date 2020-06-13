import React from 'react';
import { Button, Card, Modal, Form } from 'react-bootstrap';
import styled from 'styled-components';

let Styles = styled.div`
	.stats {
		font-size: 20px;
		color: #efefef;
	}
	.stats:hover {
		color: #000;
	}
	.flex-container {
		display: flex;
		justify-content: space-between;
	}
	.card {
		border: none;
		background-color: transparent;
	}

	@-webkit-keyframes hvr-bob {
		0% {
			-webkit-transform: translateY(-8px);
			transform: translateY(-8px);
		}
		50% {
			-webkit-transform: translateY(-4px);
			transform: translateY(-4px);
		}
		100% {
			-webkit-transform: translateY(-8px);
			transform: translateY(-8px);
		}
	}
	@keyframes hvr-bob {
		0% {
			-webkit-transform: translateY(-8px);
			transform: translateY(-8px);
		}
		50% {
			-webkit-transform: translateY(-4px);
			transform: translateY(-4px);
		}
		100% {
			-webkit-transform: translateY(-8px);
			transform: translateY(-8px);
		}
	}
	@-webkit-keyframes hvr-bob-float {
		100% {
			-webkit-transform: translateY(-8px);
			transform: translateY(-8px);
		}
	}
	@keyframes hvr-bob-float {
		100% {
			-webkit-transform: translateY(-8px);
			transform: translateY(-8px);
		}
	}
	.hvr-bob {
		display: inline-block;
		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	}
	.card:hover {
		-webkit-animation-name: hvr-bob-float, hvr-bob;
		animation-name: hvr-bob-float, hvr-bob;
		-webkit-animation-duration: 0.3s, 1.5s;
		animation-duration: 0.3s, 1.5s;
		-webkit-animation-delay: 0s, 0.3s;
		animation-delay: 0s, 0.3s;
		-webkit-animation-timing-function: ease-out, ease-in-out;
		animation-timing-function: ease-out, ease-in-out;
		-webkit-animation-iteration-count: 1, infinite;
		animation-iteration-count: 1, infinite;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
		-webkit-animation-direction: normal, alternate;
		animation-direction: normal, alternate;
	}
`;

class Walks extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false,
			setShow: false,
			refresh: false,
		};
	}
	handleClose = () => {
		this.setState({ show: false });
	};

	handleShow = () => {
		this.setState({ show: true });
	};
	render() {
		return (
			<Styles>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Edit Walk</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group>
								<Form.Label>Distance (in miles)</Form.Label>
								<Form.Control
									type='text'
									placeholder={this.props.distance}></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Time (in minutes)</Form.Label>
								<Form.Control
									type='text'
									placeholder={this.props.time}></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Weight (in pounds)</Form.Label>
								<Form.Control
									type='text'
									placeholder={this.props.weight}></Form.Control>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={this.handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={this.handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
				<Card>
					<Button
						onClick={this.handleShow}
						className='stats'
						variant='outline-light'>
						<div className='flex-container'>
							<div> Distance: {this.props.distance} mi</div>
							<div>Time: {this.props.time} min</div>
							<div>Weight: {this.props.weight} lbs</div>
						</div>
					</Button>
				</Card>
			</Styles>
		);
	}
}

export default Walks;

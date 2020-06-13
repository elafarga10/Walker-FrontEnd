import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

class CreateWalk extends React.Component {
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
								placeholder='How far did you walk?'></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Time (in minutes)</Form.Label>
							<Form.Control
								type='text'
								placeholder='How long did it take you?'></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Weight (in pounds)</Form.Label>
							<Form.Control
								type='text'
								placeholder='What is your dogs weight currently?'></Form.Control>
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
		);
	}
}

export default CreateWalk;

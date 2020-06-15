import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.navbar {
		height: 55px;
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		margin-bottom: 0px;
	}
	.item {
		margin-right: 20px;
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
	.button {
		border: none;
		background-color: transparent;
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand='lg'>
			<Navbar.Brand href='/'>Walker</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Item className='item'>
						<Button variant='outline-light' className='button' href='/'>
							Home
						</Button>
					</Nav.Item>
					<Nav.Item className='item'>
						<Button variant='outline-light' className='button' href='/login'>
							Login
						</Button>
					</Nav.Item>
					<Nav.Item className='item'>
						<Button variant='outline-light' className='button' href='/signup'>
							Sign Up
						</Button>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
);

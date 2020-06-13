import React from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import { InfoCards } from './HomeCards';
import { NavigationBar } from './Navigation';
import styled from 'styled-components';
import dogwalking from '../images/dog-walking3.jpg';

const Styles = styled.div`
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
	.cards {
		margin-top: 30px;
		padding-top: 0;
	}
	.text {
		margin: 0 auto;
		text-align: center;
		padding-top: 0;
	}
	.button {
		z-index: 10000;
	}

	.content {
		padding: 70px 0;
	}
`;

export const Jumbotron = () => (
					<Styles>
						<Jumbo fluid className='jumbo'>
							<div className='overlay'></div>
							<Container>
								<div className='text'>
									<div className='content'>
										<h1>Welcome to Walker</h1>
										<p>
											We make it easy to track your daily walks with your furry
											friend!
										</p>
										<Button variant='outline-light' href='/signup'>
											Get Started
										</Button>
									</div>
								</div>
								<div className='cards'>
									<InfoCards />
								</div>
							</Container>
						</Jumbo>
					</Styles>
				);

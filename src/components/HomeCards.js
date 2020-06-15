import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import dog1 from '../images/dog1.jpg';
import dog2 from '../images/dog2.jpg';
import dog3 from '../images/dog3.jpg';
import styled from 'styled-components';

const Styles = styled.div`
	.card {
		margin-right: 45px;
        border: none;
		background-color: transparent;
    }
    

	.button {
		position-fixed: bottom;
	}

	.text {
		color: #efefef;
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

export const InfoCards = () => (
					<Styles>
						<CardGroup>
							<LinkContainer to={`/`}>
								<Card className='card'>
									
									<Card.Body className='text'>
										<Card.Title >
											Not just for your dog
										</Card.Title>
										<Card.Text >
											With the ability to record distance and time you can easily keep a record of your own
											personal best walks.
										</Card.Text>
									</Card.Body>
								</Card>
							</LinkContainer>
							<Card>
							
								<Card.Body className='text'>
									<Card.Title>Easily track weight</Card.Title>
									<Card.Text>
										With Walker, it has never been easier to keep track of your
										dog's weight loss or gain! Walker has all types of dogs and
										their needs in mind.
									</Card.Text>
								</Card.Body>
							</Card>
							<Card>
								
								<Card.Body className='text'>
									<Card.Title>Simple Fix</Card.Title>
									<Card.Text>
										Make a mistake? Walker allows for easy editing or deleting of individual walks so your stats can always be up to date!
									</Card.Text>
								</Card.Body>
							</Card>
						</CardGroup>
					</Styles>
				);

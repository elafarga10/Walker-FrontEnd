import React from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
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

export const LoggedInJumbo = () => (
	<Styles>
		<Jumbo fluid className='jumbo'>
			<div className='overlay'></div>
			<Container>
				<div className='text'>
					<div className='content'>
						<h1>Begin Adding Walks!</h1>
						<p>
							To add a walk, simply click the 'Add Walk' button in the navigation bar above!
						</p>
					</div>
				</div>
			</Container>
		</Jumbo>
	</Styles>
);

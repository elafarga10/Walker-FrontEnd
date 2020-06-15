import React from 'react';
import LoggedInJumbo from './LoggedInJumbotron';
import { Redirect } from 'react-router-dom';

class LoggedInHome extends React.Component {

	render(props) {
		return (
			<LoggedInJumbo
				walks={this.props.walks}
				getWalks={this.props.getWalks}
				username={this.props.username}
			/>
		);
	}
}

export default LoggedInHome;

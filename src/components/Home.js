import React from 'react';
import { Jumbotron } from './Jumbotron';
import LoggedInHome from './LoggedInHome';

class Home extends React.Component {
	render(props) {
		return (
			<>
				<div style={{ display: this.props.logged_in ? 'none' : 'block' }}>
					<Jumbotron />
				</div>
				<div style={{ display: this.props.logged_in ? 'block' : 'none' }}>
					<LoggedInHome username={this.props.username} getWalks={this.props.getWalks} walks={this.props.walks}/>
				</div>
			</>
		);
	}
}

export default Home;

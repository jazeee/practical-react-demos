import React, { Component } from 'react';
import GithubUser from './demo/github-user.jsx';
import './App.css';
import {DemoButton} from './bootstrap4/demo-button.jsx';
import {DemoModal} from './bootstrap4/demo-modal.jsx';
import {Header} from './nav/header.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
		};
	}
	toggleModal = () => {
		const isModalOpen = !this.state.isModalOpen;
		this.setState({isModalOpen});
	}
		render = () => {
			return (
				<div className='App'>
					<Header />
					<GithubUser />
					<DemoButton
						onClick={this.toggleModal}
						text='Hello Jaz'
					/>
					<DemoModal
						isOpen={this.state.isModalOpen}
						toggleModal={this.toggleModal}
						title='Hello'
						body='Welcome to modals, Jaz.'
					/>
				</div>
			);
		}
}

export default App;

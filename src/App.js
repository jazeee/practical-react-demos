import React, { Component } from 'react';
import GithubUser from "./demo/github-user.jsx";
import './App.css';
import {DemoButton} from "./bootstrap4/button.jsx";
import {DemoModal} from "./bootstrap4/demo-modal.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
		}
	}
	toggleModal = () => {
		const isModalOpen = !this.state.isModalOpen;
		this.setState({isModalOpen});
	}
  render = () => {
    return (
      <div className="App">
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

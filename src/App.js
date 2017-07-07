import React, { Component } from 'react';
import GithubUser from "./demo/github-user.jsx";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<GithubUser />
      </div>
    );
  }
}

export default App;

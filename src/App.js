import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 id="logo">Skinno.</h1>
				{/* <div className="navbar">
    <h2 className="center ">Data Entry</h2>
    </div> */}
				<PostForm />
				<AllPost />
			</div>
		);
	}
}
export default App;

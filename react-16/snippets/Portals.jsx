import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalNode = document.getElementById('modal');

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { showModal: false, clicks: 0 };
		this.modalHandler = this.modalHandler.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	modalHandler() {
		this.setState({ showModal: true });
	}

	handleClick() {
		const clicks = this.state.clicks;
		this.setState({ clicks: clicks + 1 });
	}

	render() {
		const appStyles = {
			width: 200,
			height: 200,
			backgroundColor: '#ddd'
		}, modalStyles = {
			backgroundColor: 'rgba(0,0,0,.25)',
			position: 'fixed',
			width: '100%',
			height: '100%',
			top: 0,
			left: 0,
			textAlign: 'center'
		};

		return (
			<div style={appStyles}>
				App
				<br/>
				{this.state.clicks}
				<br/>
				<button onClick={this.modalHandler}>Open modal</button>
				{
					this.state.showModal ? <div onClick={this.handleClick}><Modal><div style={modalStyles}>Modal<button>click</button></div></Modal></div> : ''
				}
			</div>
		);
	}
}

class Modal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return ReactDOM.createPortal(this.props.children, modalNode);
	}
}

export { App };
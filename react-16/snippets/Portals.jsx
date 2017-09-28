import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalNode = document.getElementById('modal');

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { showModal: false };
		this.modalHandler = this.modalHandler.bind(this);
	}

	modalHandler() {
		this.setState({ showModal: true });
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
				<button onClick={this.modalHandler}>Open modal</button>
				{
					this.state.showModal ? <Modal><div style={modalStyles}>Modal</div></Modal> : ''
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
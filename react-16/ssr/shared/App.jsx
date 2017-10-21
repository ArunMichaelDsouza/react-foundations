import React, { Component } from 'react';

const A = props => {
	return `test ${props.a}`;
};

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div><A a="10"/></div>);
	}
}

export default App;

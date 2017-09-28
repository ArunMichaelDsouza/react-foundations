import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            throw new Error('I crashed!');
        }
        return <button onClick = { this.handleClick }>Error</button>;
    }
}

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorInChild: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({ errorInChild: true });
    }

    render() {
        return this.state.errorInChild ? <div>Error occured!</div> : <Child/>;
    }
}

export default ErrorBoundaries;
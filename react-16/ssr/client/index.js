import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/App.jsx';

function hydrate () {
	ReactDOM.hydrate(<App />, document.getElementById('app'));
}

document.addEventListener('DOMContentLoaded', hydrate, false);
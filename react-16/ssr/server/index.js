import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import App from '../shared/App.jsx';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	return res.send(`
		<html>
			<head>
				<script src="bundle.js"></script>
			</head>
			<body>
				<div id="app">${ReactDOM.renderToString(<App />)}</div>
			</body>
		</html>
	`);
});

app.listen(8000, () => {
	console.log('Server running...');
});
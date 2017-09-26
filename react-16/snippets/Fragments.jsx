import React from 'react';

const FragmentsArray = () => {
	return [
		<h1 key="1">This is h1</h1>,
		<h2 key="2">This is h2</h2>,
		<h3 key="3">This is h3</h3>
	];
},
	FragmentsString = () => {
		return 'Just a string';
	};

export { FragmentsArray, FragmentsString };
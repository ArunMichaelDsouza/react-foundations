import React from 'react';

// const FragmentsArray = () => {
// 	return [
// 		<h1 key="1">This is h1</h1>,
// 		<h2 key="2">This is h2</h2>,
// 		<h3 key="3">This is h3</h3>
// 	];
// },
// 	FragmentsString = () => {
//  		return 'Just a string';
// 	},

const Fragment = () => {
	return (
		<React.Fragment>
			<div>1</div>
			<div>2</div>
			<div>3</div>
		</React.Fragment>
	);
};


export { Fragment };
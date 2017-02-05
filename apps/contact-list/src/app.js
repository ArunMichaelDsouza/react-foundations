// App main script

import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './components/ContactList.jsx';

const contacts = [{
	name: 'Arun', 
	phone: 111,
	id: 1
}, {
	name: 'Sai',
	phone: 222,
	id: 2
}, {
	name: 'Vasinee',
	phone: 333,
	id: 3
}, {
	name: 'Erica',
	phone: 444,
	id: 4
}];

ReactDOM.render(<ContactList contacts={contacts} />, document.getElementById('app'));
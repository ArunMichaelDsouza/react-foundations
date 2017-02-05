// App main script

import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './components/ContactList.jsx';

const contacts = [{
	name: 'Arun',
	phone: 111
}, {
	name: 'Sai',
	phone: 222
}, {
	name: 'Vasinee',
	phone: 333
}, {
	name: 'Erica',
	phone: 444
}];

ReactDOM.render(<ContactList contacts={contacts} />, document.getElementById('app'));
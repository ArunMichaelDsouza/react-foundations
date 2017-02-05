// Single contact component 

import React from 'react';

const Contact = ({ contact }) => {
	return (
		<li>{contact.name} {contact.phone}</li>
	);
};

export default Contact;
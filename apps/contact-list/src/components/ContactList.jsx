// Contact list component

import React, { PropTypes } from 'react';
import Contact from './Contact.jsx';

class ContactList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: this.props.contacts
		};
	}

	render() {
		return (
			<ul>
				{
					this.state.contacts.map( (contact, i) => {
						return <Contact key={i} contact={contact} />
					})
				}
			</ul>
		);
	}
};

ContactList.PropTypes = {
	contacts: PropTypes.object.isRequired
};

export default ContactList;
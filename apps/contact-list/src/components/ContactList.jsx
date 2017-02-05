// Contact list component

import React, { PropTypes } from 'react';
import Contact from './Contact.jsx';

class ContactList extends React.Component {
	constructor(props) {
		super(props);
		this.filterContacts = this.filterContacts.bind(this);
		this.addContact = this.addContact.bind(this);

		this.state = {
			contacts: this.props.contacts
		};
	}

	filterContacts(e) {
		const filter = e.target.value.toLowerCase(),
			filteredContacts = this.props.contacts.filter( contact => {
				return contact.name.toLowerCase().indexOf(filter) !== -1;
			});

		this.setState({
			contacts: filteredContacts
		});
	}

	addContact(e) {
		e.preventDefault();

		const name = this.refs.name.value,
			phone = this.refs.phone.value;

		this.setState({
			contacts: this.state.contacts.concat({name, phone})
		});

		this.refs.name.value = this.refs.phone.value = '';
	}	

	render() {
		return (
			<div>
				<form onSubmit={this.addContact}>
					<input type="text" ref="name" placeholder="Enter name" required />
					<br/>
					<input type="text" ref="phone" placeholder="Enter phone" required />
					<br/>
					<button>Add Contact</button>
				</form>
				<br/><br/>
				<input type="text" placeholder="Search.." onChange={this.filterContacts} />
				<ul>
					{
						this.state.contacts.map( (contact, i) => {
							return <Contact key={i} contact={contact} />
						})
					}
				</ul>
			</div>
		);
	}
};

ContactList.PropTypes = {
	contacts: PropTypes.object.isRequired
};

export default ContactList;
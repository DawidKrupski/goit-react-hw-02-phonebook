import React from 'react';
// import css from './ContactList.module.css';
// import PropTypes from 'prop-types';

export class ContactList extends React.Component {
  deleteThisContact = () => {
    const { contacts, deleteContact } = this.props;
    const { id } = contacts.map(contact => contact);
    console.log(id);
    deleteContact(id);
  };

  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number} : {id}
            <button onClick={this.deleteThisContact}>Delete</button>
          </li>
        ))}
      </>
    );
  }
}

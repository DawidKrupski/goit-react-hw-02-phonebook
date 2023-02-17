import React from 'react';
import css from './ContactList.module.css';
// import PropTypes from 'prop-types';

export class ContactList extends React.Component {
  deleteThisContact = () => {
    const { contact, deleteContact } = this.props;
    const { id } = contact;

    deleteContact(id);
  };

  render() {
    const { contact, filter } = this.props;
    const filteredContacts = contact.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
        <button onClick={this.deleteThisContact}>Delete</button>
      </>
    );
  }
}

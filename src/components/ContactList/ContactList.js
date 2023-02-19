import React from 'react';
// import css from './ContactList.module.css';

export class ContactList extends React.Component {
  render() {
    const { contacts, filter, deleteContact } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => deleteContact(id)}>Delete</button>
          </li>
        ))}
      </>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { ContactList } from 'components/ContactList/ContactList';

export class Contacts extends React.Component {
  state = { contacts: [], name: '', number: '' };

  newContact = evt => {
    this.setState({
      name: evt.target.value,
    });
  };

  newNumber = evt => {
    this.setState({
      number: evt.target.value,
    });
  };

  addContact = evt => {
    evt.preventDefault();
    const { contacts } = this.state;
    const lastid =
      contacts.length > 0
        ? Math.max(...contacts.map(contact => contact.id))
        : 0;
    this.setState(state => ({
      contacts: state.contacts.concat({
        name: state.name,
        number: state.number,
        id: lastid + 1,
      }),
      name: '',
      number: '',
    }));
    // console.log(this.state);
  };

  render() {
    return (
      <>
        <label>Name</label>
        <form onSubmit={this.addContact}>
          <input
            value={this.state.name}
            onChange={this.newContact}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            value={this.state.number}
            onChange={this.newNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <ul>
          {this.state.contacts.map((contact, index) => (
            <ContactList contact={contact} key={index} />
          ))}
        </ul>
      </>
    );
  }
}

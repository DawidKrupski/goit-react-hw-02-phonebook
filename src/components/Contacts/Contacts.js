import React from 'react';
// import PropTypes from 'prop-types';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/ContactList/Filter/Filter';
import css from './Contacts.module.css';

export class Contacts extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  Contact = evt => {
    this.setState({
      name: evt.target.value,
    });
  };

  Number = evt => {
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
  };

  deleteContact = id => {
    this.setState(state => ({
      constacts: state.constacts.filter(constact => constact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <label className={css.phonebook}>Phonebook</label>
        <form onSubmit={this.addContact} className={css.form}>
          <label>Name</label>
          <input
            className={css.input}
            value={this.state.name}
            onChange={this.Contact}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Number</label>
          <input
            className={css.input}
            value={this.state.number}
            onChange={this.Number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
        <ul className={css.list}>
          <label className={css.contacts}>Contacts</label>
          <Filter />
          {this.state.contacts.map((contact, index) => (
            <ContactList
              contact={contact}
              deleteContact={this.deleteContact}
              key={index}
            />
          ))}
        </ul>
      </>
    );
  }
}

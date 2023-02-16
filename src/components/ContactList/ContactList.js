import React from 'react';
import PropTypes from 'prop-types';

export class ContactList extends React.Component {
  render() {
    const { contact, deleteContact } = this.props;
    return (
      <li>
        {contact.name}: {contact.number}
        <button onClick={this.deleteContact}>Delete</button>
      </li>
    );
  }
}

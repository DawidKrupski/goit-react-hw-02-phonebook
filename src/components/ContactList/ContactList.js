import React from 'react';
// import PropTypes from 'prop-types';

export class ContactList extends React.Component {
  deleteThisContact = () => {
    const { contact, deleteContact } = this.props;
    const { id } = contact;

    deleteContact(id);
  };

  render() {
    const { contact } = this.props;
    return (
      <li>
        {contact.name}: {contact.number} : {contact.id}
        <button onClick={this.deleteThisContact}>Delete</button>
      </li>
    );
  }
}

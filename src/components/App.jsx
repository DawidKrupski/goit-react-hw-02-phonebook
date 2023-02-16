import React from 'react';
import { Contacts } from './Contacts/Contacts';
// import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Contacts />
      </div>
    );
  }
}

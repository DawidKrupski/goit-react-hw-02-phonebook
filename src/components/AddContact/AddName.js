import React from 'react';
import css from './AddName.module.css';

export class AddName extends React.Component {
  render() {
    const { name, handleNameInput } = this.props;
    return (
      <>
        <label htmlFor="name" className={css.name}>
          Name
        </label>
        <input
          className={css.input}
          value={name}
          onChange={handleNameInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
  }
}

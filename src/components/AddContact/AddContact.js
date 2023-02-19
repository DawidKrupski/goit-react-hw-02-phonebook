import React from 'react';
import { AddName } from 'components/AddContact/AddName';
import { AddNumber } from 'components/AddContact/AddNumber';
import css from './AddContact.module.css';

export class AddContact extends React.Component {
  static defaultProps = {
    name: '',
    number: '',
  };
  render() {
    const { handleNumberInput, handleNameInput, handleSubmit, name, number } =
      this.props;

    return (
      <>
        <form onSubmit={handleSubmit} className={css.form}>
          <AddName handleNameInput={handleNameInput} name={name} />
          <AddNumber handleNumberInput={handleNumberInput} number={number} />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

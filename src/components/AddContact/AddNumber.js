import React from 'react';
import css from './AddNumber.module.css';
import PropTypes from 'prop-types';

export class AddNumber extends React.Component {
  render() {
    const { number, handleNumberInput } = this.props;
    return (
      <>
        <label htmlFor="number" className={css.number}>
          Number
        </label>
        <input
          className={css.input}
          value={number}
          onChange={handleNumberInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </>
    );
  }
}

AddNumber.propTypes = {
  number: PropTypes.number,
};

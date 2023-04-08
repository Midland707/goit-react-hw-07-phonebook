import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

import { sendContact } from '../../service/contactsApi';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onChangeHandel = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const makeContact = () => {
    return {
      name: name,
      number: number,
    };
  };

  const contacts = useSelector(selectContacts);
  const handleSubmit = eventSubmit => {
    eventSubmit.preventDefault();

    sendContact();

    const alertState = contacts.find(contact => contact.name === name);
    if (!alertState) {
      dispatch(addContact(makeContact()));
      eventSubmit.target.reset();
    } else alert(`${name} is already in contacts`);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formNameTitle}>
        Name
        <input
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeHandel}
        />
      </label>
      <label className={css.formNameTitle}>
        Number
        <input
          className={css.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeHandel}
        />
      </label>
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

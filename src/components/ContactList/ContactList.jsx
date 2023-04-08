import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts } from '../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

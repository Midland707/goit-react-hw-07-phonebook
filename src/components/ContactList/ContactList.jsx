import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

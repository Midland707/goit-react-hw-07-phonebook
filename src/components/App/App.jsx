import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import css from './App.module.css';

export function App() {
  const contacts = useSelector(selectContacts);
  return (
    <div className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      {contacts.length === 0 ? (
        <div>Contacts list is empty ... </div>
      ) : (
        <>
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}

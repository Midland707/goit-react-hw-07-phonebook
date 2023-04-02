import PropTypes from 'prop-types';
import { deleteContacts } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button
        className={css.deleteButton}
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

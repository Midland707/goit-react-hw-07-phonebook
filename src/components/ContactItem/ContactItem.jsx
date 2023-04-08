import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      {name}: {phone}
      <button
        className={css.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

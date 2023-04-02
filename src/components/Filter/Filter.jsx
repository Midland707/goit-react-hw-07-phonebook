import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <label className={css.filterNameTitle}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

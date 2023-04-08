import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './operations';

const contactsInitialState = {
  contactItems: [],
  isLoading: false,
  error: null,
};

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    fetchContacts: {
      reducer(state, action) {
        state.contactItems = action.payload;
      },
    },
    addContact: {
      reducer(state, action) {
        state.contactItems = [...state.contactItems, action.payload];
      },
    },
    deleteContacts(state, action) {
      state.contactItems = state.contactItems.filter(
        contact => contact.id !== action.payload
      );
    },
    extraReducers: {
      [getContacts.pending](state) {
        state.isLoading = true;
      },
      [getContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contactItems = action.payload;
      },
      [getContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  },
});

export const { fetchContacts, addContact, deleteContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

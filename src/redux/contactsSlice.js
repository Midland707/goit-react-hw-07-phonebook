// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { getContacts } from '../service/contactsApi';

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
    fetchContacts: {},
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
  },
});

export const { addContact, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

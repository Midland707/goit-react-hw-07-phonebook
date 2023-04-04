import { createSlice } from '@reduxjs/toolkit';
const contactsInitialState = {
  contactItems: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
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

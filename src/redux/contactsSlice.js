import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';

const contactsPending = state => {
  state.isLoading = true;
};

const contactsRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  contactItems: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [getContacts.pending]: contactsPending,
    [getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactItems = action.payload;
    },
    [getContacts.rejected]: contactsRejected,

    [addContact.pending]: contactsPending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactItems.push(action.payload);
    },
    [addContact.rejected]: contactsRejected,

    [deleteContact.pending]: contactsPending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contactItems.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contactItems.splice(index, 1);
    },
    [deleteContact.rejected]: contactsRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

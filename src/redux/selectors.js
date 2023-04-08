import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contactItems;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const selectFilter = state => state.filter.value;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],

  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

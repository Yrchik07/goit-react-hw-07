export const selectContacts = state => state.contacts.items;
export const selectNameFilter = state => state.filter.name;

export const selectDetails = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsError = state => state.contacts.error;
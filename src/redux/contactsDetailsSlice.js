import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestContactsDetailsById } from '../services/api';

export const apiFetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (contactId, thunkApi) => {
    try {
      const data = await requestContactsDetailsById(contactId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

const INITAL_STATE = {
  // contactsDetails: null,
  // isLoading: false,
  // isError: false,
  // error: null,
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: '',
  },
};

export const contactsSlice = createSlice({
  name: 'fetchContacts',
  initialState: INITAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(apiFetchContacts.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiFetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(apiFetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;

// import { getContactsFromLocalStorage } from 'utils/getContactsFromLocalStorage';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactListSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    addNewContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    removeContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

export const { addNewContact, setFilter, removeContact } =
  contactListSlice.actions;
export const contactListReducer = contactListSlice.reducer;
// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addNewContact': {
//       return {
//         ...state,
//         contacts: state.contacts.some(
//           contact => contact.name === action.payload.name
//         )
//           ? [...state.contacts]
//           : [...state.contacts, action.payload],
//       };
//     }
//     case 'contacts/searchContactByName': {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     case 'contacts/removeContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(({ id }) => id !== action.payload),
//       };
//     }

//     default:
//       return state;
//   }
// };

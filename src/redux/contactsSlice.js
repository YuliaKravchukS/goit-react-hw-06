import { createSlice } from "@reduxjs/toolkit";
import { INITAL_STATE } from "../constans/constans";
import { useSelector } from "react-redux";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE.contacts,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});
export const selectContacts = () => {
  const items = useSelector((state) => state.contacts.items);
  return items;
};
export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

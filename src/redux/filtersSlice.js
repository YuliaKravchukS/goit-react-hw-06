import { createSlice } from "@reduxjs/toolkit";
import { INITAL_STATE } from "../constans/constans";
import { useSelector } from "react-redux";

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITAL_STATE.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = () => {
  const name = useSelector((state) => state.filters.name);
  return name;
};
export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

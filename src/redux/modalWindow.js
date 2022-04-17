import { createSlice } from '@reduxjs/toolkit';

export const modalWindowSlice = createSlice({
  name: 'ModalWindowText',
  initialState: {
    modalWindowText: false,
  },
  reducers: {
    setModalWindowText: (state, action) => {
      state.modalWindowText = action.payload;
    },
  },
});

export const { setModalWindowText } = modalWindowSlice.actions;

export default modalWindowSlice.reducer;

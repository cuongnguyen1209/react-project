import { createSlice } from "@reduxjs/toolkit"

export const OpenPopupSlice = createSlice({
    name: 'openPopup',
    initialState: {
      openValue: false,
    },
    reducers: {
      setOpenPopup: (state, action) => {
        state.openValue = action.payload;
      }
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setOpenPopup } = OpenPopupSlice.actions;
  export default OpenPopupSlice.reducer;
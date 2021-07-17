import { configureStore } from '@reduxjs/toolkit';
import OpenPopupSlice from './OpenPopupSlice';


export default configureStore({
  reducer: {
      open: OpenPopupSlice
  },
})
import { configureStore } from '@reduxjs/toolkit';
import FlightSearchSlice from './FlightSearchSlice';
import OpenPopupSlice from './OpenPopupSlice';




export default configureStore({
  reducer: {
    open: OpenPopupSlice,
    flightSearch: FlightSearchSlice
  },
 
})
import { createSlice } from "@reduxjs/toolkit"

export const FlightSearchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        depatureValue: "",
        arrivalValue: "",
        costValue: 0,
        seatValue: 1,
    },
    reducers: {
      getDepatureValue: (state, action) => {
        state.depatureValue = action.payload;
      },
      getArrivalValue: (state, action) => {
        state.arrivalValue = action.payload;
      },
      getCostValue: (state, action) => {
        state.costValue = action.payload;
      },
      getSeatValue: (state, action) => {
        state.seatValue = state.seatValue + action.payload;
      },
    },
  })
  
  export const { getDepatureValue, getArrivalValue, getCostValue, getSeatValue } = FlightSearchSlice.actions;
  export default FlightSearchSlice.reducer;
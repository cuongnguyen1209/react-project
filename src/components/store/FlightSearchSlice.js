import { createSlice } from "@reduxjs/toolkit"

export const FlightSearchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        depatureValue: "",
        arrivalValue: "",
        costValue: 0,
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
    },
  })
  
  export const { getDepatureValue, getArrivalValue, getCostValue } = FlightSearchSlice.actions;
  export default FlightSearchSlice.reducer;
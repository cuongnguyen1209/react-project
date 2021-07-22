import { createSlice } from "@reduxjs/toolkit";

export const FlightSearchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        depatureValue: "",
        arrivalValue: "",
        costValue: 0,
        adultsCount: 1,
        minorsCount: 0,
        cartValue: "",
        timeValue: "",
        distanceValue: 0,
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
      getAdultsCount: (state, action) => {
        state.adultsCount = state.adultsCount + action.payload;
      },
      getMinorsCount: (state, action) => {
        state.minorsCount = state.minorsCount + action.payload;
      },
      getCartValue: (state, action) => {
        state.minorsCount = action.payload;
      },
      getTimeValue: (state, action) => {
        state.timeValue = action.payload;
      },
      getDistanceValue: (state, action) => {
        state.distanceValue = action.payload;
      },
    },
  })
  
  export const { getDepatureValue, getArrivalValue, getCostValue,
                  getAdultsCount, getMinorsCount, getCartValue, 
                  getTimeValue, getDistanceValue, } = FlightSearchSlice.actions;

  export default FlightSearchSlice.reducer;
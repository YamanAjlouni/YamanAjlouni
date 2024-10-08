// hotelsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { GetSpecialOffer } from '../actions/SpecialOfferAction';
import { GetSpecialOfferRoom } from '../actions/SpecialOfferRoom';

// Create hotels slice
const specialOfferSlice = createSlice({
  name: 'special_offer',
  initialState: {
    special_offer: [],
    selectedSpecialOffer: null,
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetSpecialOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetSpecialOffer.fulfilled, (state, action) => {
        state.special_offer = action.payload;
        state.loading = false;
      })
      .addCase(GetSpecialOffer.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // Handle GetSpecialOfferRoom actions

      .addCase(GetSpecialOfferRoom.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetSpecialOfferRoom.fulfilled, (state, action) => {
        state.selectedSpecialOffer = action.payload;
        state.loading = false;
      })
      .addCase(GetSpecialOfferRoom.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

  },
});

export default specialOfferSlice.reducer;

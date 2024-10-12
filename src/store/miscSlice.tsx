import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const miscSlice = createSlice({
  name: "misc",
  initialState: {
    fullScreen: false as boolean,
    autoSync: false as boolean,
  },
  reducers: {
    // for onLoad
    setFullScreen: (state, action: PayloadAction<boolean>) => {
      state.fullScreen = action.payload;
    },
    toggleAutoSync: (state) => {
      state.autoSync = !state.autoSync;
    },
  },
});

export const { setFullScreen, toggleAutoSync } = miscSlice.actions;

export default miscSlice.reducer;

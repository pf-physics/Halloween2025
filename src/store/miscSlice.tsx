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
    setAutoSync: (state, action: PayloadAction<boolean>) => {
      state.autoSync = action.payload;
    },
  },
});

export const { setFullScreen, setAutoSync } = miscSlice.actions;

export default miscSlice.reducer;

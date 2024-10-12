import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const miscSlice = createSlice({
  name: "misc",
  initialState: {
    bossTime: false as boolean,
    autoSync: false as boolean,
  },
  reducers: {
    // for onLoad
    setBossTime: (state, action: PayloadAction<boolean>) => {
      state.bossTime = action.payload;
    },
    toggleAutoSync: (state) => {
      state.autoSync = !state.autoSync;
    },
  },
});

export const { setBossTime, toggleAutoSync } = miscSlice.actions;

export default miscSlice.reducer;

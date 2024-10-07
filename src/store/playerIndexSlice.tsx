import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localIndex } from "../constants";

export const counterSlice = createSlice({
  name: "playerIndex",
  initialState: {
    value: undefined as number | undefined,
  },
  reducers: {
    increment: (state) => {
      if (state.value) {
        state.value += 1;
        localStorage.setItem(localIndex, (state.value + 1).toString());
      }
    },
    decrement: (state) => {
      if (state.value) {
        state.value -= 1;
        localStorage.setItem(localIndex, (state.value - 1).toString());
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.value) {
        state.value += action.payload;
        localStorage.setItem(
          localIndex,
          (state.value + action.payload).toString(),
        );
      }
    },
    setPlayerIndex: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      localStorage.setItem(localIndex, action.payload.toString());
    },
    // ONLY set index if the index is undefined
    initializePlayerIndex: (state, action: PayloadAction<number>) => {
      if (!state.value) {
        state.value = action.payload;
        localStorage.setItem(localIndex, action.payload.toString());
      }
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setPlayerIndex,
  initializePlayerIndex,
} = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'playerIndex',
  initialState: {
    value: undefined as number | undefined,
  },
  reducers: {
    increment: (state) => {
        if (state.value)
          state.value += 1
    },
    decrement: (state) => {
        if (state.value)
          state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
        if (state.value)
          state.value += action.payload
    },
    setPlayerIndex: (state, action: PayloadAction<number>) => {
        state.value = action.payload
      },
  },
})

export const { increment, decrement, incrementByAmount, setPlayerIndex } = counterSlice.actions

export default counterSlice.reducer
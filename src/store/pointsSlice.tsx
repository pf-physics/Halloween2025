import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const pointsSlice = createSlice({
  name: 'points',
  initialState: {
    value: 0 as number,
  },
  reducers: {
    // for onLoad
    setPoints: (state, action: PayloadAction<number>) => {
          state.value = action.payload
    },
    addPoints: (state, action: PayloadAction<number>) => {
          state.value += action.payload
    },
  },
})

export const { setPoints, addPoints } = pointsSlice.actions

export default pointsSlice.reducer
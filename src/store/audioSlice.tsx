import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'index',
  initialState: {
    value: undefined as any | undefined,
    fadeIn: false,
    fadeOut: false
  },
  reducers: {
    setAudio: (state, action: PayloadAction<any>) => {
          state.value = action.payload
    },
  },
})

export const { setAudio } = counterSlice.actions

export default counterSlice.reducer
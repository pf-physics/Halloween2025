import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'index',
  initialState: {
    value: undefined as any | undefined,
    fadeIn: false,
    fadeOut: false,
    loop: true,
  },
  reducers: {
    setAudio: (state, action: PayloadAction<any>) => {
          state.value = action.payload
    },
    setLoop: (state, action: PayloadAction<boolean>) => {
      state.loop = action.payload
    },
  },
})

export const { setAudio, setLoop } = counterSlice.actions

export default counterSlice.reducer
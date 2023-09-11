import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const globalSceneSlice = createSlice({
  name: 'globalSceneValid',
  initialState: {
    value: false,
  },
  reducers: {
    setGlobalSceneValid: (state, action: PayloadAction<boolean>) => {
        state.value = action.payload
      },
  },
})

export const { setGlobalSceneValid } = globalSceneSlice.actions

export default globalSceneSlice.reducer
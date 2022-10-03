import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'index',
  initialState: {
    value: "",
  },
  reducers: {
    setTeam: (state, action: PayloadAction<string>) => {
        state.value = action.payload
      },
  },
})

export const { setTeam } = counterSlice.actions

export default counterSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const teamSlice = createSlice({
  name: 'teams',
  initialState: {
    value: [] as string[],
  },
  reducers: {
    setTeams: (state, action: PayloadAction<string[]>) => {
          state.value = action.payload
    },
  },
})

export const { setTeams } = teamSlice.actions

export default teamSlice.reducer
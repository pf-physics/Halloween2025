import { configureStore } from '@reduxjs/toolkit'
import indexReducer from './indexSlice'
import playerIndexReducer from './playerIndexSlice'
import audioReducer from './audioSlice'
import componentIndexReducer from './componentIndexSlice'

export const store = configureStore({
  reducer: {
    index: indexReducer,
    playerIndex: playerIndexReducer,
    componentIndex: componentIndexReducer,
    audio: audioReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
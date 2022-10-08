import { configureStore } from '@reduxjs/toolkit'
import indexReducer from './indexSlice'
import playerIndexReducer from './playerIndexSlice'

export const store = configureStore({
  reducer: {
    index: indexReducer,
    playerIndex: playerIndexReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
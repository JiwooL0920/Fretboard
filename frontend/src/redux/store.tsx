import { configureStore } from '@reduxjs/toolkit'
import fretboardSlice from './fretboardSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

// Suppress some error message
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export const store = configureStore({
  reducer: {
    fretboard: fretboardSlice
  },
  middleware: customizedMiddleware
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
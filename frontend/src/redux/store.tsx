import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
// Slice
import fretboardSlice from './fretboardSlice';
import intervalPageSlice from './intervalPageSlice';
import fretGamePageSlice from './fretGamePageSlice';

// Suppress some error message
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export const store = configureStore({
  reducer: {
    fretboard: fretboardSlice,
    intervalPage: intervalPageSlice,
    fretGamePage: fretGamePageSlice
  },
  middleware: customizedMiddleware
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
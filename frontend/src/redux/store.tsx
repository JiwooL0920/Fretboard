import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
// Slice
import fretboardSlice from './fretboardSlice';
import intervalPageSlice from './intervalPageSlice';
import fretGamePageSlice from './fretGamePageSlice';
import scalePageSlice from './scalePageSlice';
import chordPageSlice from './chordPageSlice';


// Suppress some error message
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export const store = configureStore({
  reducer: {
    fretboard: fretboardSlice,
    fretGamePage: fretGamePageSlice,
    intervalPage: intervalPageSlice,
    scalePage: scalePageSlice,
    chordPage: chordPageSlice
  },
  middleware: customizedMiddleware
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
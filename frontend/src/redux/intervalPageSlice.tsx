import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getIntervalNoteFromRootNote} from '../util/intervalLogic'

export interface IntervalPageState {
    rootNote: string
    selectedIntervals: string[]
    notesToDisplay: string[]
    // selectedIntervalSymbols: string[]
}

const initialState: IntervalPageState = {
    rootNote: 'C',
    selectedIntervals: ["Root", "Major Third", "Perfect Fifth"],
    notesToDisplay: ["C","E","G"],
}




export const intervalPageSlice = createSlice({
    name: 'intervalPage-setting',
    initialState,
    reducers:  {
        setRootNote: (state, action: PayloadAction<string>) => {
            state.rootNote = action.payload; 
            intervalPageSlice.caseReducers.getNotesToDisplay(state);
        },
        toggleSelectedInterval: (state, action: PayloadAction<string>) => {
            const interval = action.payload;
            if (interval === "Root") { return; } // if "Root", don't toggle
            const index = state.selectedIntervals.indexOf(action.payload);
            if (index === -1) {
              state.selectedIntervals.push(action.payload); // add interval if it's not already in the array
            } else {
              state.selectedIntervals.splice(index, 1); // remove interval if it's already in the array
            }
            intervalPageSlice.caseReducers.getNotesToDisplay(state);
        },
        // Reducer that re-computes notesToDisplay
        getNotesToDisplay: (state) => {
          state.notesToDisplay = []
          for (const interval of state.selectedIntervals) {
            const note:string = getIntervalNoteFromRootNote(state.rootNote,interval);
            state.notesToDisplay.push(note)
          }
        }
                 
    }
});

// this is for dispatch
export const {  setRootNote, 
                toggleSelectedInterval,
             } = intervalPageSlice.actions;

// this is for configureStore
export default intervalPageSlice.reducer;
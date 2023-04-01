import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { DisplayMode, Accidental } from '../util/enums';


export interface IntervalPageState {
    accidental: Accidental
    displayMode: DisplayMode
    rootNote: string
    selectedIntervals: string[]
}

const initialState: IntervalPageState = {
    accidental: Accidental.Flat,
    displayMode: DisplayMode.Interval,
    rootNote: 'C',
    selectedIntervals: ["Root", "Major Third", "Perfect Fifth"],
}




export const intervalPageSlice = createSlice({
    name: 'fretboard-setting',
    initialState,
    reducers:  {
        toggleAccidental: (state) => {
            state.accidental = state.accidental === Accidental.Flat ? Accidental.Sharp : Accidental.Flat;
        },
        toggleDisplayMode: (state) => {
            state.displayMode = state.displayMode === DisplayMode.Note ? DisplayMode.Interval : DisplayMode.Note;
        },
        setRootNote: (state, action: PayloadAction<string>) => {
            state.rootNote = action.payload; 
        },
        toggleSelectedInterval: (state, action: PayloadAction<string>) => {
            const interval = action.payload;
            if (interval === "Root") { return; } // if "Root", don't toggle
            const index = state.selectedIntervals.indexOf(action.payload);
            if (index === -1) {
              // add interval if it's not already in the array
              state.selectedIntervals.push(action.payload);
            } else {
              // remove interval if it's already in the array
              state.selectedIntervals.splice(index, 1);
            }
          }
                 
    }
});

// this is for dispatch
export const {  toggleAccidental,
                toggleDisplayMode,
                setRootNote, 
                toggleSelectedInterval,
             } = intervalPageSlice.actions;

// this is for configureStore
export default intervalPageSlice.reducer;
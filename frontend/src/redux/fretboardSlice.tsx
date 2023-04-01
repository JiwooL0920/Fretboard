import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { DisplayMode } from '../util/enums';


export interface FretboardState {
    rootNote: string
    selectedIntervals: string[]
    displayMode: DisplayMode
}

const initialState: FretboardState = {
    rootNote: 'C',
    selectedIntervals: ["Root", "Major Third", "Perfect Fifth"],
    displayMode: DisplayMode.Note,
}

export const fretboardSlice = createSlice({
    name: 'fretboard-setting',
    initialState,
    reducers:  {
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
export const { setRootNote, toggleSelectedInterval } = fretboardSlice.actions;

// this is for configureStore
export default fretboardSlice.reducer;
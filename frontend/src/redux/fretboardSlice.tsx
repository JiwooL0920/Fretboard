import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { DisplayMode, Accidental } from '../util/enums';


export interface FretboardState {
    tuning: string[]
    numFrets: number
    accidental: Accidental
    displayMode: DisplayMode
    rootNote: string
    selectedIntervals: string[]
}

const initialState: FretboardState = {
    tuning: ['E','A','D','G','B','E'],
    numFrets: 15,
    accidental: Accidental.Flat,
    displayMode: DisplayMode.Interval,
    rootNote: 'C',
    selectedIntervals: ["Root", "Major Third", "Perfect Fifth"],
}




export const fretboardSlice = createSlice({
    name: 'fretboard-setting',
    initialState,
    reducers:  {
        setTuning: (state, action: PayloadAction<string[]>) => {
            state.tuning = action.payload;
        },
        setNumFrets: (state, action: PayloadAction<number>) => {
            state.numFrets = action.payload;
        },
        setAccidental: (state, action: PayloadAction<Accidental>) => {
            state.accidental = action.payload;
          },
        setDisplayMode: (state, action: PayloadAction<DisplayMode>) => {
            state.displayMode = action.payload;
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
export const { setRootNote, toggleSelectedInterval } = fretboardSlice.actions;

// this is for configureStore
export default fretboardSlice.reducer;
import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { DisplayMode, Accidental } from '../util/enums';

export interface FretboardState {
    tuning: string[]
    numFrets: number
    accidental: Accidental
    displayMode: DisplayMode
}

const initialState: FretboardState = {
    tuning: ['E','A','D','G','B','E'],
    numFrets: 22,
    accidental: Accidental.Flat,
    displayMode: DisplayMode.Interval
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
        toggleAccidental: (state) => {
            state.accidental = state.accidental === Accidental.Flat ? Accidental.Sharp : Accidental.Flat;
        },
        toggleDisplayMode: (state) => {
            state.displayMode = state.displayMode === DisplayMode.Note ? DisplayMode.Interval : DisplayMode.Note;
        },
    }
});

// this is for dispatch
export const {  setTuning, 
                setNumFrets,
                toggleAccidental,
                toggleDisplayMode
             } = fretboardSlice.actions;

// this is for configureStore
export default fretboardSlice.reducer;
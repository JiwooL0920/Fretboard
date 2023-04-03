import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Accidental } from '../util/enums';

export interface FretboardState {
    tuning: string[]
    numStrings: number 
    numFrets: number
    accidental: Accidental
}

const initialState: FretboardState = {
    tuning: ['E','A','D','G','B','E'],
    numStrings: 6,
    numFrets: 22,
    accidental: Accidental.Flat,
}


export const fretboardSlice = createSlice({
    name: 'fretboard-setting',
    initialState,
    reducers:  {
        setTuning: (state, action: PayloadAction<string[]>) => {
            state.tuning = action.payload;
        },
        setNumStrings: (state, action: PayloadAction<number>) => {
            state.numStrings = action.payload;
        },           
        setNumFrets: (state, action: PayloadAction<number>) => {
            state.numFrets = action.payload;
        },         
        toggleAccidental: (state) => {
            state.accidental = state.accidental === Accidental.Flat ? Accidental.Sharp : Accidental.Flat;
        },
    }
});

// this is for dispatch
export const {  setTuning, 
                setNumStrings,
                setNumFrets,
                toggleAccidental,
             } = fretboardSlice.actions;

// this is for configureStore
export default fretboardSlice.reducer;
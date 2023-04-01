import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { DisplayMode, Accidental } from '../util/enums';

export interface FretboardState {
    tuning: string[]
    numFrets: number
}

const initialState: FretboardState = {
    tuning: ['E','A','D','G','B','E'],
    numFrets: 22,
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
    }
});

// this is for dispatch
export const {  setTuning, 
                setNumFrets,
             } = fretboardSlice.actions;

// this is for configureStore
export default fretboardSlice.reducer;
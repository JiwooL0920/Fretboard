import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Accidental, DisplayMode } from '../util/enums';

export interface FretboardState {
    // page: string
    tuning: string[]
    numStrings: number 
    numFrets: number,
    // stringRange: number[],
    // fretRange: number[],
    accidental: Accidental
    // displayMode: DisplayMode, 
    // rootNote: string, 
    // notesToDisplay: string[]
}

const initialState: FretboardState = {
    // page: '/interval',
    tuning: ['E','A','D','G','B','E'],
    numStrings: 6,
    numFrets: 22,
    // stringRange: [1,6],
    // fretRange: [0,22],
    accidental: Accidental.Flat,
    // displayMode: DisplayMode.Interval,
    // rootNote: 'C',
    // notesToDisplay: ['C','E','G']
}


export const fretboardSlice = createSlice({
    name: 'fretboard-setting',
    initialState,
    reducers:  {
        // setPage: (state, action: PayloadAction<string>) => {
        //     state.page = action.payload; 
        // },
        setTuning: (state, action: PayloadAction<string[]>) => {
            state.tuning = action.payload;
        },
        setNumStrings: (state, action: PayloadAction<number>) => {
            state.numStrings = action.payload;
        },           
        setNumFrets: (state, action: PayloadAction<number>) => {
            state.numFrets = action.payload;
        },       
        // setStringRange: (state, action: PayloadAction<number[]>) => {
        //     state.stringRange = action.payload; 
        // },
        // setFretRange: (state, action: PayloadAction<number[]>) => {
        //     state.fretRange = action.payload; 
        // },
        toggleAccidental: (state) => {
            state.accidental = state.accidental === Accidental.Flat ? Accidental.Sharp : Accidental.Flat;
        },
        // setAccidental: (state, action: PayloadAction<Accidental>) => {
        //     state.accidental = action.payload; 
        // }, 
        // setDisplayMode: (state, action: PayloadAction<DisplayMode>) => {
        //     state.displayMode = action.payload; 
        // },       
        // toggleDisplayMode: (state) => {
        //     state.displayMode = state.displayMode === DisplayMode.Note ? DisplayMode.Interval : DisplayMode.Note;
        // },      
        // setRootNote: (state, action: PayloadAction<string>) => {
        //     state.rootNote = action.payload; 
        // },        
        // setNotesToDisplay: (state, action: PayloadAction<string[]>) => {
        //     state.notesToDisplay = action.payload; 
        // },                  
    }
});

// this is for dispatch
export const {  
                // setPage,
                setTuning, 
                setNumStrings,
                setNumFrets,
                // setStringRange,
                // setFretRange,
                toggleAccidental,
                // setAccidental,
                // setDisplayMode,
                // toggleDisplayMode,
                // setRootNote,
                // setNotesToDisplay
             } = fretboardSlice.actions;

// this is for configureStore
export default fretboardSlice.reducer;
import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { DisplayMode } from '../util/enums';


export interface ChordPageState {
    rootNote: string
    chordType: string
    displayMode: DisplayMode
}

const initialState: ChordPageState = {
    rootNote: "C",
    chordType: "Maj",
    displayMode: DisplayMode.Interval
}


export const chordPageSlice = createSlice({
    name: 'chordPage-setting',
    initialState,
    reducers:  {
        setRootNote: (state, action: PayloadAction<string>) => {
            state.rootNote = action.payload; 
        },
        setChordType: (state, action: PayloadAction<string>) => {
            state.chordType = action.payload; 
        },       
        setDisplayMode: (state, action: PayloadAction<DisplayMode>) => {
            state.displayMode = action.payload;
        },
        toggleDisplayMode: (state) => {
            state.displayMode = state.displayMode === DisplayMode.Note ? DisplayMode.Interval : DisplayMode.Note;
        },
    }
});

// this is for dispatch
export const {  setRootNote, 
                setChordType,
                setDisplayMode,
                toggleDisplayMode
             } = chordPageSlice.actions;

// this is for configureStore
export default chordPageSlice.reducer;
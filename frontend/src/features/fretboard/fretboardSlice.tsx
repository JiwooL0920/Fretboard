import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { DisplayMode } from '../../util/enums';


export interface FretboardState {
    rootNote: string
    selectedIntervals: Set<string>
    displayMode: DisplayMode
}

const initialState: FretboardState = {
    rootNote: 'C',
    selectedIntervals: new Set(),
    displayMode: DisplayMode.Note,
}

export const fretboardSlice = createSlice({
    name: 'fretboard-setting',
    initialState,
    reducers:  {
        setRootNote: (state, action: PayloadAction<string>) => {
            state.rootNote = action.payload; 
        },
    }
});

// this is for dispatch
export const { setRootNote } = fretboardSlice.actions;

// this is for configureStore
export default fretboardSlice.reducer;
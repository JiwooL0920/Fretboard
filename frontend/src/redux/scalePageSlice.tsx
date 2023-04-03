import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { DisplayMode } from '../util/enums';

export interface ScalePageState {
    displayMode: DisplayMode
    rootNote: string
    scale: string
    displayAllPosition: boolean 
    position: number
}

const initialState: ScalePageState = {
    displayMode: DisplayMode.Note,
    rootNote: 'C',
    scale: "Minor Pentatonic",
    displayAllPosition: true,
    position: 1
}




export const scalePageSlice = createSlice({
    name: 'intervalPage-setting',
    initialState,
    reducers:  {
        setRootNote: (state, action: PayloadAction<string>) => {
            state.rootNote = action.payload; 
        },
        setDisplayMode: (state, action: PayloadAction<DisplayMode>) => {
            state.displayMode = action.payload; 
        },
                 
    }
});

// this is for dispatch
export const {  setRootNote, 
                setDisplayMode,
             } = scalePageSlice.actions;

// this is for configureStore
export default scalePageSlice.reducer;
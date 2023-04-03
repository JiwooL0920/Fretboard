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
        setDisplayMode: (state, action: PayloadAction<DisplayMode>) => {
            state.displayMode = action.payload; 
        },
        setRootNote: (state, action: PayloadAction<string>) => {
            state.rootNote = action.payload; 
        },    
        setScale: (state, action: PayloadAction<string>) => {
            state.scale = action.payload; 
        },       
        setPosition: (state, action: PayloadAction<number>) => {
            state.position = action.payload; 
        },    
    }
});

// this is for dispatch
export const {  setDisplayMode, 
                setRootNote,
                setScale,
                setPosition,
             } = scalePageSlice.actions;

// this is for configureStore
export default scalePageSlice.reducer;
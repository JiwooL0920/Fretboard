import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ScalePageState {
    rootNote: string
    scale: string
    displayAllPosition: boolean 
    position: number
}

const initialState: ScalePageState = {
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
                 
    }
});

// this is for dispatch
export const {  setRootNote, 
             } = scalePageSlice.actions;

// this is for configureStore
export default scalePageSlice.reducer;
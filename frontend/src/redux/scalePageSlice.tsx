import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ScalePageState {
    rootNote: string
    selectedScale: string
    notesToDisplay: string[]
    displayAllPosition: boolean 
    position: number
}

const initialState: ScalePageState = {
    rootNote: 'C',
    selectedScale: "Pentatonic",
    notesToDisplay: ["C", "Eb", "F", "G", "Bb"],
    displayAllPosition: true,
    position: 1
}




export const scalePageSlice = createSlice({
    name: 'intervalPage-setting',
    initialState,
    reducers:  {
        setRootNote: (state, action: PayloadAction<string>) => {
            state.rootNote = action.payload; 
            scalePageSlice.caseReducers.getNotesToDisplay(state);
        },

        getNotesToDisplay: (state) => {

        },
        
                 
    }
});

// this is for dispatch
export const {  setRootNote, 
             } = scalePageSlice.actions;

// this is for configureStore
export default scalePageSlice.reducer;
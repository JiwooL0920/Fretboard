import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IntervalPageState {
    rootNote: string
    selectedIntervals: string[]
}

const initialState: IntervalPageState = {
    rootNote: 'C',
    selectedIntervals: ["1", "3", "5"],
}




export const intervalPageSlice = createSlice({
    name: 'intervalPage-setting',
    initialState,
    reducers:  {
        setRootNote: (state, action: PayloadAction<string>) => {
            state.rootNote = action.payload; 
        },
        toggleSelectedInterval: (state, action: PayloadAction<string>) => {
            const interval = action.payload;
            if (interval === "1") { return; } // if "Root", don't toggle
            const index = state.selectedIntervals.indexOf(action.payload);
            if (index === -1) {
              state.selectedIntervals.push(action.payload); // add interval if it's not already in the array
            } else {
              state.selectedIntervals.splice(index, 1); // remove interval if it's already in the array
            }
        },                 
    }
});

// this is for dispatch
export const {  setRootNote, 
                toggleSelectedInterval,
             } = intervalPageSlice.actions;

// this is for configureStore
export default intervalPageSlice.reducer;
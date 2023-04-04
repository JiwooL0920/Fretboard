import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { DisplayMode } from '../util/enums';

export interface IntervalPageState {
    displayMode: DisplayMode
    rootNote: string
    selectedIntervals: string[]
}

const initialState: IntervalPageState = {
    displayMode: DisplayMode.Interval,
    rootNote: 'C',
    selectedIntervals: ["1", "3", "5", "7"],
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
        toggleDisplayMode: (state) => {
            state.displayMode = state.displayMode === DisplayMode.Note ? DisplayMode.Interval : DisplayMode.Note;
        },
        setDisplayMode: (state, action: PayloadAction<DisplayMode>) => {
            state.displayMode = action.payload;
        }            
    }
});

// this is for dispatch
export const {  setRootNote, 
                toggleSelectedInterval,
                toggleDisplayMode,
                setDisplayMode
             } = intervalPageSlice.actions;

// this is for configureStore
export default intervalPageSlice.reducer;
import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface FretGamePageState {
    isGameRunning: boolean,
    score: number
    notesToDisplay: string[]
    targetString: number
}

const initialState: FretGamePageState = {
    isGameRunning: false, 
    score: 0,
    notesToDisplay: ["C"],
    targetString: 6
}




export const fretGamePageSlice = createSlice({
    name: 'fretboard-setting',
    initialState,
    reducers:  {
        setIsGameRunning: (state, action: PayloadAction<boolean>) => {
            state.isGameRunning = action.payload;
        },
        setScore: (state, action: PayloadAction<number>) => {
            state.score = action.payload;
        },
        setTargetString: (state, action: PayloadAction<number>) => {
            state.targetString = action.payload;
        }
                 
    }
});

// this is for dispatch
export const {  setIsGameRunning,
                setScore,
                setTargetString
             } = fretGamePageSlice.actions;

// this is for configureStore
export default fretGamePageSlice.reducer;
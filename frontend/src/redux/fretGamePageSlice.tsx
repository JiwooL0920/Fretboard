import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface FretGamePageState {
    isGameRunning: boolean
    score: number
    time: number
    note: string
    targetString: number
}

const initialState: FretGamePageState = {
    isGameRunning: false, 
    score: 0,
    time: 10,
    note: "C",
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
        setTime: (state, action: PayloadAction<number>) => {
            state.time = action.payload;
        },
        decrementTime: (state) => {
            state.time -= 1; 
        },
        setTargetString: (state, action: PayloadAction<number>) => {
            state.targetString = action.payload;
        },
                 
    }
});

// this is for dispatch
export const {  setIsGameRunning,
                setScore,
                setTime,
                decrementTime,
                setTargetString
             } = fretGamePageSlice.actions;

// this is for configureStore
export default fretGamePageSlice.reducer;
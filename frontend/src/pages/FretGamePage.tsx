import React from 'react'
import Fretboard from '../components/Fretboard'

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import * as fretboardSlice from '../redux/fretboardSlice'
import * as fretGamePageSlice from '../redux/fretGamePageSlice'
import Box from '@mui/material/Box';


const FretGamePage = () => {
    // REDUX
    const fretboardState = useSelector<RootState, fretboardSlice.FretboardState>(state => state.fretboard);
    const fretGamePageState = useSelector<RootState, fretGamePageSlice.FretGamePageState>(state => state.fretGamePage);

    const dispatch = useDispatch();
        
    return (
        <div>
            <h1>Fretboard Memorization Game</h1>
            <Box 
                sx={{   //backgroundColor: "#FFFFFF", 
                        color: "#711a39", 
                        fontSize: 80, 
                        fontWeight: "bold",
                        width: "70%",
                        margin: "0 auto",
            }}>
                {fretGamePageState.notesToDisplay}
            </Box>
            <Fretboard {...fretGamePageState}/>
        </div>

        
    )
}

export default FretGamePage
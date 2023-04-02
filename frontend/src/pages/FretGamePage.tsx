import React from 'react'

import Box from '@mui/material/Box';


import Fretboard from '../components/Fretboard'
import TimeBar from '../components/subcomponents/TimeBar';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import * as fretboardSlice from '../redux/fretboardSlice'
import * as fretGamePageSlice from '../redux/fretGamePageSlice'




const FretGamePage = () => {
    // REDUX
    const fretboardState = useSelector<RootState, fretboardSlice.FretboardState>(state => state.fretboard);
    const fretGamePageState = useSelector<RootState, fretGamePageSlice.FretGamePageState>(state => state.fretGamePage);

    const dispatch = useDispatch();

    

      
        
    return (
        <div>
            <h1>Fretboard Memorization Game</h1>
            <Box 
                sx={{   backgroundColor: "##e7e6e5", 
                        color: "#711a39", 
                        fontSize: 80, 
                        fontWeight: "bold",
                        width: "70%",
                        margin: "0 auto",
            }}>
                {fretGamePageState.notesToDisplay}
            </Box>

            <TimeBar time={fretGamePageState.time}/>
            <Fretboard {...fretGamePageState}/>
        </div>

        
    )
}

export default FretGamePage
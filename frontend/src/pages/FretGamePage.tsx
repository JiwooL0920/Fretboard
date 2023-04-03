import React from 'react'

import Box from '@mui/material/Box';


import Fretboard, {FretboardProps} from '../components/Fretboard'
import {getNotesToDisplay} from '../util/logic'
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

    const note:string = fretGamePageState.note

    const fretboardProps: FretboardProps = {
        page: "/fretgame",
        displayMode: fretboardState.displayMode,
        numStrings: fretboardState.numStrings,
        numFrets: fretboardState.numFrets,     
        stringRange: [1,6],
        fretRange: [0,22],
        rootNote: fretGamePageState.note,
        notesToDisplay:  getNotesToDisplay(fretGamePageState.note, ["Root"])
    }
    

    return (
        <div>
            <h1>Fretboard Memorization Game</h1>
            <Box 
                sx={{   // backgroundColor: '#303233',
                        color: "##e7e6e5", 
                        fontSize: 40, 
                        fontWeight: "bold",
                        width: "70%",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "space-evenly",
                        borderRadius: 5,                        
            }}>
                <div style={{display:"inline-block", alignSelf: "flex-end"}}>{"Time Left: " + fretGamePageState.time}</div>
                <div style={{color:"#711a39", fontSize:80}}>{fretGamePageState.note}</div>
                <div style={{display:"inline-block", alignSelf: "flex-end"}}>{"Score: " + fretGamePageState.score}</div>
                
            </Box>

            <TimeBar time={fretGamePageState.time}/>
            <Fretboard {...fretboardProps}/>
        </div>

        
    )
}

export default FretGamePage
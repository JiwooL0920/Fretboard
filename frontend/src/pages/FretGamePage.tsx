import React from 'react'
import Fretboard from '../components/Fretboard'

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import * as fretboardSlice from '../redux/intervalPageSlice'
import { RootState } from '../redux/store';

const FretGamePage = () => {
    // REDUX
    // const fretboardSetting = useSelector<RootState, fretboardSlice.FretboardState>(state => state.fretboard);
    // const dispatch = useDispatch();
        
    return (
        <div>
            <h1>Fretboard Memorization Game</h1>
            <Fretboard/>
        </div>

        
    )
}

export default FretGamePage
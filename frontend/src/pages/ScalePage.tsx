import React from 'react'
import FretboardScalePage from '../components/FretboardScalePage'

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import * as fretboardSlice from '../redux/fretboardSlice'
import * as scalePageSlice from '../redux/scalePageSlice'


const ScalePage = () => {
    // REDUX
    const fretboardState = useSelector<RootState, fretboardSlice.FretboardState>(state => state.fretboard);
    const scalePageState = useSelector<RootState, scalePageSlice.ScalePageState>(state => state.scalePage);
    const dispatch = useDispatch();
    
        
    return (
        <div className="scale-page">
            <h1>ScalePage</h1>
            {/* <FretboardScalePage {...fretboardState}/> */}
        </div>
        
    )
}

export default ScalePage
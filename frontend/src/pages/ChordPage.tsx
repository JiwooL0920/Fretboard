import React from 'react'
import Fretboard, {FretboardProps} from '../components/Fretboard'


// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import * as fretboardSlice from '../redux/fretboardSlice'
import * as chordPageSlice from '../redux/chordPageSlice'




const ChordPage = () => {
    // REDUX
    const fretboardState = useSelector<RootState, fretboardSlice.FretboardState>(state => state.fretboard);
    const chordPageState = useSelector<RootState, chordPageSlice.ChordPageState>(state => state.chordPage);

    const dispatch = useDispatch();

    const fretboardProps: FretboardProps = {
        page: "/interval",
        displayMode: chordPageState.displayMode,
        numStrings: fretboardState.numStrings,
        numFrets: fretboardState.numFrets,     
        stringRange: [1,6],
        fretRange: [[0,22]],
        rootNote: chordPageState.rootNote,
        notesToDisplay: {A: '1', C: 'b3', D: '4', E: '5', G: 'b7'}
    }

    return (
        <div className="chord-page">
            <h1>ChordPage</h1>
            <Fretboard {...fretboardProps}/>  
        </div>
        
    )
}

export default ChordPage
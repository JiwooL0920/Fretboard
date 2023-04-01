import React, {useState} from 'react'
import Fretboard, {FretboardProps} from '../components/Fretboard'
import {notesFlat, notesSharp, intervalToSymbol, getIntervalNoteFromRootNote} from '../util/logic'
import {DisplayMode, Accidental} from '../util/enums'
import Button from '@mui/material/Button';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { FretboardState, setRootNote, toggleSelectedInterval } from '../redux/fretboardSlice'
import { RootState } from '../redux/store';


const IntervalPage = () => {
    const [accidental, setAccidental] = useState(Accidental.Flat);
    const [displayMode, setDisplayMode] = useState(DisplayMode.Interval)

    const fretboardSetting = useSelector<RootState, FretboardState>(state => state.fretboard);

    const dispatch = useDispatch();
    

    const createRootNoteButtons = () => {
        return(
            <div className="rootButtons">
                { (accidental === Accidental.Flat ? notesFlat : notesSharp).map((note:string) => {
                    return (
                        <Button 
                            sx={{
                                width: 80,
                                height: 80,
                                margin: 1,
                                color: '#FFFFFF',
                                fontSize: 30,
                                textTransform: 'none',
                                backgroundColor: note === fretboardSetting.rootNote ? '#711a39' : '#303233',
                                '&:hover': { backgroundColor: note === fretboardSetting.rootNote ? '#611630' : '#1e252b'}
                                
                            }}
                            onClick={() => dispatch(setRootNote(note))}
                        >
                            {note}
                        </Button>
                    )})}
            </div>
        );
    }

    const createIntervalButtons = () => {
        return(
            <div className="intervalButtons">
                {Object.keys(intervalToSymbol).map((interval:string) => {
                    return (
                        <Button
                            sx={{
                                width: 200,
                                height: 80,
                                margin: 1,
                                color: '#FFFFFF',
                                fontSize: 20,
                                textTransform: 'none',
                                backgroundColor: fretboardSetting.selectedIntervals.includes(interval) ? '#546961' : '#303233',
                                '&:hover': { backgroundColor: fretboardSetting.selectedIntervals.includes(interval) ? '#455750' : '#1e252b'},
                            }}
                            onClick={() => { dispatch(toggleSelectedInterval(interval)) }}
                        >
                            {interval}
                        </Button>
                    )
                })}
            </div>
        );
    }


    return (
        <div className="interval-page">
            <h1>Interval Page</h1>
            {/* <Fretboard {...fretboardProps}/> */}
            <h1>{fretboardSetting.rootNote}</h1>
        
            {createRootNoteButtons()}
            {createIntervalButtons()}

        </div>
  

    )
}

export default IntervalPage
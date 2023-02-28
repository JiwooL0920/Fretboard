import React, {useState} from 'react'
import Fretboard, {FretboardProps} from '../components/Fretboard'
import {notesFlat, notesSharp, intervals} from '../util/logic'
import {Accidental} from '../util/enums'
import { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

const IntervalPage = () => {
    const [rootNote, setRootNote] = useState("C");
    const [accidental, setAccidental] = useState(Accidental.Flat);
    const [selectedIntervals, setSelectedIntervals] = useState(new Set<string>("Octaves"));

    const fretboardProps:FretboardProps = {
        rootNote : rootNote
    }


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
                                backgroundColor: note === rootNote ? '#711a39' : '#303233',
                                '&:hover': { backgroundColor: note === rootNote ? '#611630' : '#1e252b'}
                                
                            }}
                            onClick={() => setRootNote(note)}
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
                {intervals.map((interval:string) => {
                    return (
                        <Button
                            sx={{
                                width: 200,
                                height: 80,
                                margin: 1,
                                color: '#FFFFFF',
                                fontSize: 20,
                                textTransform: 'none',
                                backgroundColor: selectedIntervals.has(interval) ? '#546961' : '#303233',
                                '&:hover': { backgroundColor: selectedIntervals.has(interval) ? '#455750' : '#1e252b'},
                            }}
                            onClick={() => {
                                const newIntervalsSet = new Set(selectedIntervals);
                                selectedIntervals.has(interval) ? newIntervalsSet.delete(interval) : newIntervalsSet.add(interval);
                                setSelectedIntervals(newIntervalsSet);
                            }}
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
            <Fretboard {...fretboardProps}/>
        
            {createRootNoteButtons()}
            {createIntervalButtons()}

        </div>
  

    )
}

export default IntervalPage
import React, {useState} from 'react'
import Fretboard, {FretboardProps} from '../components/Fretboard'
import {notesFlat, notesSharp, intervalToSymbol, getIntervalNoteFromRootNote} from '../util/logic'
import {DisplayMode, Accidental} from '../util/enums'
import Button from '@mui/material/Button';

const IntervalPage = () => {
    const [rootNote, setRootNote] = useState("C");
    const [accidental, setAccidental] = useState(Accidental.Flat);
    const [displayMode, setDisplayMode] = useState(DisplayMode.Interval)
    const [selectedIntervals, setSelectedIntervals] = useState(new Set<string>(["Root", "Major Third", "Perfect Fifth"]));
    
    // Dictionary that, for the selected root Note and given set of selected intervals, store what note each interval corresponds to 
    // { interval, note }
    // ex. rootNote = C,    selected intervals = {"Major Third", "Perfect Fifth"},    noteToInterval = {"Major Third":"E", "Perfect Fifth":"G"}
    const noteToInterval: {[key: string]: string} = {}

    selectedIntervals.forEach((interval:string) => {
        const note = getIntervalNoteFromRootNote(rootNote, interval)
        noteToInterval[note] = interval; 
    })

    console.log("Hello!")
    console.log(noteToInterval)

    const fretboardProps:FretboardProps = {
        rootNote : rootNote,
        selectedIntervals: selectedIntervals,
        displayMode: displayMode,
        noteToInterval: noteToInterval
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
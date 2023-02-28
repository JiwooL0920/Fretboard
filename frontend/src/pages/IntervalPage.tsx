import React, {useState} from 'react'
import Fretboard, {FretboardProps} from '../components/Fretboard'
import {notesFlat, notesSharp} from '../util/logic'
import {Accidental} from '../util/enums'
import { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

const IntervalPage = () => {
    const [rootNote, setRootNote] = useState("C");
    const [accidental, setAccidental] = useState(Accidental.Flat);

    const handleChange = (event: SelectChangeEvent) => {
        setRootNote(event.target.value as string);
    };

    const fretboardProps:FretboardProps = {
        rootNote : rootNote
    }


    const createRootNoteButtons = () => {
        return(
            <div className="rootButtons">
                { (accidental === Accidental.Flat ? notesFlat : notesSharp).map((note) => {
                    return (
                        <Button 
                            sx={{
                                width: 80,
                                height: 80,
                                margin: 1,
                                color: '#FFFFFF',
                                fontSize: 30,
                                textTransform: 'none',
                                '&:hover': { backgroundColor: note === rootNote ? '#611630' : '#1e252b'},
                                backgroundColor: note === rootNote ? '#711a39' : '#303233'
                                
                            }}
                            onClick={() => setRootNote(note)}
                        >
                            {note}
                        </Button>
                    )})}
            </div>
        );
    }


    return (
        <div className="interval-page">
            <h1>Interval Page</h1>
            <Fretboard {...fretboardProps}/>
        
            {createRootNoteButtons()}

        </div>
  

    )
}

export default IntervalPage
import React from 'react'
import Fretboard, {FretboardProps} from '../components/Fretboard'
import {notesFlat, notesSharp, getNotesToDisplayFromScale, getNotesToDisplayFromChord, positionToRootNoteStringNumber, scaleToInterval, getFretNumberFromNoteAndString, positionOffset, chordToInterval} from '../util/logic'
import {Accidental, DisplayMode} from '../util/enums'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';


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
        page: "/chord",
        displayMode: chordPageState.displayMode,
        numStrings: fretboardState.numStrings,
        numFrets: fretboardState.numFrets,     
        stringRange: [1,6],
        fretRange: [[0,22]],
        rootNote: chordPageState.rootNote,
        notesToDisplay: getNotesToDisplayFromChord(chordPageState.rootNote, chordPageState.chordType)
    }


    const createRootNoteButtons = () => {
        return(
            <div className="rootButtons">
                { (fretboardState.accidental === Accidental.Flat ? notesFlat : notesSharp).map((note:string) => {
                    return (
                        <Button 
                            key={note}
                            sx={{
                                width: 50,
                                height: 50,
                                margin: 0.7,
                                color: '#FFFFFF',
                                fontSize: 20,
                                textTransform: 'none',
                                backgroundColor: note === chordPageState.rootNote ? '#711a39' : '#303233',
                                '&:hover': { backgroundColor: note === chordPageState.rootNote ? '#611630' : '#1e252b'}
                                
                            }}
                            onClick={() => dispatch(chordPageSlice.setRootNote(note))}
                        >
                            {note}
                        </Button>
                    )})}
            </div>
        );
    }

    const createChordButtons = () => {
        return(
            <div className="chordButtons" style={{width:"70%", margin: "0 auto"}}>
                {Object.keys(chordToInterval).map((chord:string) => {
                    return (
                        <Button
                            key={chord}
                            sx={{
                                width: 200,
                                height: 50,
                                margin: 0.7,
                                color: '#FFFFFF',
                                fontSize: 20,
                                textTransform: 'none',
                                backgroundColor: chordPageState.chordType === chord ? '#546961' : '#303233',
                                '&:hover': { backgroundColor: chordPageState.chordType === chord ? '#455750' : '#1e252b'},
                            }}
                            onClick={() => { dispatch(chordPageSlice.setChordType(chord)) }}
                        >
                            {chord}
                        </Button>
                    )
                })}
            </div>
        );
    }


    return (
        <div className="chord-page">
            <h1>ChordPage</h1>
            <Grid component="label" container alignItems="center" justifyContent="center" spacing={1} 
                  sx={{ fontSize: 20 }}
            >
                <Grid item>Note</Grid>
                <Grid item>
                    <Switch
                        // sx={{ width: 60, height: 40 }}
                        checked={chordPageState.displayMode === DisplayMode.Interval ? true : false}
                        onChange={() => dispatch(chordPageSlice.toggleDisplayMode())} 
                        value="checked" 
                    />
                </Grid>
                <Grid item>Interval</Grid>
            </Grid>


            <Fretboard {...fretboardProps}/>  
            {createRootNoteButtons()}
            {createChordButtons()}
        </div>
        
    )
}

export default ChordPage
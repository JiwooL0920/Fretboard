import Fretboard, {FretboardProps} from '../components/Fretboard'
import {notesFlat, notesSharp, intervalSymbolToName, getNotesToDisplayFromIntervals} from '../util/logic'
import {Accidental, DisplayMode} from '../util/enums'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';

// REDUX
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import * as fretboardSlice from '../redux/fretboardSlice'
import * as intervalPageSlice from '../redux/intervalPageSlice'


const IntervalPage = () => {
    // REDUX
    const fretboardState = useSelector<RootState, fretboardSlice.FretboardState>(state => state.fretboard);
    const intervalPageState = useSelector<RootState, intervalPageSlice.IntervalPageState>(state => state.intervalPage);

    const dispatch = useDispatch();

    const fretboardProps: FretboardProps = {
        page: "/interval",
        displayMode: intervalPageState.displayMode,
        numStrings: fretboardState.numStrings,
        numFrets: fretboardState.numFrets,     
        stringRange: [1,6],
        fretRange: [[0,22]],
        rootNote: intervalPageState.rootNote,
        notesToDisplay: getNotesToDisplayFromIntervals(intervalPageState.rootNote, intervalPageState.selectedIntervals)
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
                                backgroundColor: note === intervalPageState.rootNote ? '#711a39' : '#303233',
                                '&:hover': { backgroundColor: note === intervalPageState.rootNote ? '#611630' : '#1e252b'}
                                
                            }}
                            onClick={() => dispatch(intervalPageSlice.setRootNote(note))}
                        >
                            {note}
                        </Button>
                    )})}
            </div>
        );
    }

    const createIntervalButtons = () => {
        return(
            <div className="intervalButtons" style={{width:"70%", margin: "0 auto"}}>
                {Object.keys(intervalSymbolToName).map((interval:string) => {
                    return (
                        <Button
                            key={interval}
                            sx={{
                                width: 200,
                                height: 50,
                                margin: 0.7,
                                color: '#FFFFFF',
                                fontSize: 20,
                                textTransform: 'none',
                                backgroundColor: intervalPageState.selectedIntervals.includes(interval) ? '#546961' : '#303233',
                                '&:hover': { backgroundColor: intervalPageState.selectedIntervals.includes(interval) ? '#455750' : '#1e252b'},
                            }}
                            onClick={() => { dispatch(intervalPageSlice.toggleSelectedInterval(interval)) }}
                        >
                            {intervalSymbolToName[interval]}
                        </Button>
                    )
                })}
            </div>
        );
    }



    

    return (
        <div className="interval-page">
            <h1>Interval Generator</h1>
            <Grid component="label" container alignItems="center" justifyContent="center" spacing={1} 
                  sx={{ fontSize: 20 }}
            >
                <Grid item>Note</Grid>
                <Grid item>
                    <Switch
                        // sx={{ width: 60, height: 40 }}
                        checked={intervalPageState.displayMode === DisplayMode.Interval ? true : false}
                        onChange={() => dispatch(intervalPageSlice.toggleDisplayMode())} 
                        value="checked" 
                    />
                </Grid>
                <Grid item>Interval</Grid>
            </Grid>



            <Fretboard {...fretboardProps}/>        


            {createRootNoteButtons()}
            {createIntervalButtons()}


        </div>
  

    )
}



export default IntervalPage
import Fretboard from '../components/Fretboard'
import {notesFlat, notesSharp, intervalToSymbol} from '../util/logic'
import {Accidental, DisplayMode} from '../util/enums'
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import * as fretboardSlice from '../redux/fretboardSlice'

import { RootState } from '../redux/store';


const IntervalPage = () => {
    // REDUX
    const fretboardSetting = useSelector<RootState, fretboardSlice.FretboardState>(state => state.fretboard);
    const dispatch = useDispatch();
    

    const createRootNoteButtons = () => {
        return(
            <div className="rootButtons">
                { (fretboardSetting.accidental === Accidental.Flat ? notesFlat : notesSharp).map((note:string) => {
                    return (
                        <Button 
                            key={note}
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
                            onClick={() => dispatch(fretboardSlice.setRootNote(note))}
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
                            key={interval}
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
                            onClick={() => { dispatch(fretboardSlice.toggleSelectedInterval(interval)) }}
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
            <Grid component="label" container alignItems="center" justifyContent="center" spacing={1} 
                  sx={{ fontSize: 28, margin:3 }}
            >
                <Grid item>Note</Grid>
                <Grid item>
                    <Switch
                        // sx={{ width: 60, height: 40 }}
                        checked={fretboardSetting.displayMode === DisplayMode.Interval ? true : false}
                        onChange={() => dispatch(fretboardSlice.toggleDisplayMode())} 
                        value="checked" 
                    />
                </Grid>
                <Grid item>Interval</Grid>
            </Grid>



            <Fretboard />        
            {createRootNoteButtons()}
            {createIntervalButtons()}

        </div>
  

    )
}



export default IntervalPage
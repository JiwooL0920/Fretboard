import Fretboard, { FretboardProps } from '../components/Fretboard'
import {notesFlat, notesSharp, getNotesToDisplayFromScale, positionToRootNoteStringNumber, scaleToInterval, getFretNumberFromNoteAndString, positionOffset} from '../util/logic'
import {Accidental, DisplayMode} from '../util/enums'

import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';

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

    const getFretRange = (position: number):number[] => {
        const targetStrings: number[] = positionToRootNoteStringNumber[position]
        const range:number[] = [100,-100];

        var startFromFret:number = 0;
        // console.log(targetStrings)
        for (const string of targetStrings) {
            const fret:number = getFretNumberFromNoteAndString(scalePageState.rootNote, string, startFromFret);
            console.log("string: ", string, " rootNote: ", scalePageState.rootNote, "fret: ", fret, " | startFromFret: ", startFromFret)
            range[0] = Math.min(range[0], fret) // set min
            range[1] = Math.max(range[1], fret) // set max
            startFromFret = (startFromFret === 0 ? fret : Math.min(startFromFret, fret))

        }

        // add/subtract offset from range
        const offset:number[] = positionOffset[scalePageState.scale][position]
        range[0] = range[0] - offset[0] // adjust min
        range[1] = range[1] + offset[1] // adjust max 

        return range;
    }
    
    const fretboardProps: FretboardProps = {
        page: "/scale",
        displayMode: scalePageState.displayMode,
        numStrings: fretboardState.numStrings,
        numFrets: fretboardState.numFrets,     
        stringRange: [1,6],
        fretRange: getFretRange(scalePageState.position),
        rootNote: scalePageState.rootNote,
        notesToDisplay: getNotesToDisplayFromScale(scalePageState.rootNote, scalePageState.scale)
    }


    const createRootNoteButtons = () => {
        return(
            <div className="rootButtons">
                { (fretboardState.accidental === Accidental.Flat ? notesFlat : notesSharp).map((note:string) => {
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
                                backgroundColor: note === scalePageState.rootNote ? '#711a39' : '#303233',
                                '&:hover': { backgroundColor: note === scalePageState.rootNote ? '#611630' : '#1e252b'}
                                
                            }}
                            onClick={() => dispatch(scalePageSlice.setRootNote(note))}
                        >
                            {note}
                        </Button>
                    )})}
            </div>
        );
    }

    const createPositionButtons = () => {
        return(
            <div className="position-buttons">
                { Object.keys(positionToRootNoteStringNumber).map((position: string) => {
                    return (
                        <Button 
                            key={position}
                            sx={{
                                width: 80,
                                height: 80,
                                margin: 1,
                                color: '#FFFFFF',
                                fontSize: 30,
                                textTransform: 'none',
                                backgroundColor: parseInt(position) === scalePageState.position ? '#485c7b' : '#303233',
                                '&:hover': { backgroundColor: parseInt(position) === scalePageState.position ? '#3f506b' : '#1e252b'}
                                
                            }}
                            onClick={() => dispatch(scalePageSlice.setPosition(parseInt(position)))}
                        >
                            {position}
                        </Button>
                    )})}
            </div>
        );
    }

    const createScaleButtons = () => {
        return(
            <div className="scaleButtons" style={{width:"70%", margin: "0 auto"}}>
                { Object.keys(scaleToInterval).map((scale:string) => {
                    return (
                        <Button 
                            key={scale}
                            sx={{
                                width: 270,
                                height: 80,
                                margin: 1,
                                color: '#FFFFFF',
                                fontSize: 30,
                                textTransform: 'none',
                                backgroundColor: scale === scalePageState.scale ? '#546961' : '#303233',
                                '&:hover': { backgroundColor: scale === scalePageState.scale ? '#455750' : '#1e252b'}
                                
                            }}
                            onClick={() => dispatch(scalePageSlice.setScale(scale))}
                        >
                            {scale}
                        </Button>
                    )})}
            </div>
        );
    }


 
    return (
        <div className="scale-page">
            <h1>Scale Generator</h1>
            <Grid component="label" container alignItems="center" justifyContent="center" spacing={1} 
                  sx={{ fontSize: 28, margin:3 }}
            >
                <Grid item>Note</Grid>
                <Grid item>
                    <Switch
                        // sx={{ width: 60, height: 40 }}
                        checked={scalePageState.displayMode === DisplayMode.Interval ? true : false}
                        onChange={() => dispatch(scalePageSlice.toggleDisplayMode())} 
                        value="checked" 
                    />
                </Grid>
                <Grid item>Interval</Grid>
            </Grid>
            <Fretboard {...fretboardProps}/>
            {createRootNoteButtons()}
            {createPositionButtons()}
            {createScaleButtons()}
        </div>
        
    )
}

export default ScalePage
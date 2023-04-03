import Fretboard, { FretboardProps } from '../components/Fretboard'
import {notesFlat, notesSharp, getNotesToDisplayFromScale, positionToStringNumber, scaleToInterval} from '../util/logic'
import {Accidental, DisplayMode} from '../util/enums'

import Button from '@mui/material/Button';

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

    // const getFretRange = (position: number):number[] => {
    //     switch (position) {
    //         case 1:
    //         case 2:
    //         case 3:
    //         case 4:
    //         case 5:
    //         default:
    //             throw new Error("Invalid scale position number: " + position);
    //     }
    // }
    
    const fretboardProps: FretboardProps = {
        page: "/scale",
        displayMode: scalePageState.displayMode,
        numStrings: fretboardState.numStrings,
        numFrets: fretboardState.numFrets,     
        stringRange: [1,6],
        fretRange: [0,22],
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


    const createScaleButtons = () => {
        return(
            <div className="scaleButtons">
                { Object.keys(scaleToInterval).map((scale:string) => {
                    return (
                        <Button 
                            key={scale}
                            sx={{
                                width: 300,
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


    const createPositionButtons = () => {
        return(
            <div className="position-buttons">
                { Object.keys(positionToStringNumber).map((position: string) => {
                    return (
                        <Button 
                            key={position}
                            sx={{
                                width: 300,
                                height: 80,
                                margin: 1,
                                color: '#FFFFFF',
                                fontSize: 30,
                                textTransform: 'none',
                                backgroundColor: parseInt(position) === scalePageState.position ? '#546961' : '#303233',
                                '&:hover': { backgroundColor: parseInt(position) === scalePageState.position ? '#455750' : '#1e252b'}
                                
                            }}
                            onClick={() => dispatch(scalePageSlice.setPosition(parseInt(position)))}
                        >
                            {position}
                        </Button>
                    )})}
            </div>
        );
    }

        
    return (
        <div className="scale-page">
            <h1>ScalePage</h1>
            <Fretboard {...fretboardProps}/>
            {createRootNoteButtons()}
            {createScaleButtons()}
            {createPositionButtons()}
        </div>
        
    )
}

export default ScalePage
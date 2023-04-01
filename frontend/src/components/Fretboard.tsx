import React from 'react'
import {DisplayMode} from '../util/enums';
import {getIntervalNoteFromRootNote, getNote, intervalToSymbol} from '../util/intervalLogic'
import '../css/fretboard.css';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import * as intervalPageSlice from '../redux/intervalPageSlice'
import * as fretboardSlice from '../redux/fretboardSlice'

// PROPS ==============================================================
interface StringProps {
    stringNumber: number
    stringNote: string
}

interface FretProps {
    stringNumber: number
    fretNumber: number
    note: string
}


// FRETBOARD COMPONENT =======================================================
// Structure:
// <Fretboard/>
//      <String/>
//          <Fret/>
//          ...
///      ...

const Fretboard = () => {
    // REDUX
    const fretboardState = useSelector<RootState, fretboardSlice.FretboardState>(state => state.fretboard);
    const intervalPageState = useSelector<RootState, intervalPageSlice.IntervalPageState>(state => state.intervalPage);

    // Dictionary that maps selected notes and its interval symbol
    // ex. {'C':'1', 'E':'3', 'G':'5'}
    const notesToDisplay: {[key: string]: string} = {};
    for (const interval of intervalPageState.selectedIntervals) {
        const note:string = getIntervalNoteFromRootNote(intervalPageState.rootNote,interval);
        const intervalSymbol = intervalToSymbol[interval];
        notesToDisplay[note] = intervalSymbol
    } 


    // STRING COMPONENT ==========================================================
    const String = (props: StringProps) => {
        return(
            <div 
                className="string"
                string-number={props.stringNumber}
                string-note={props.stringNote}
            >
                { Array.from({ length: fretboardState.numFrets + 1 }, (_, index) => index).map( (i:number) => {
                    const fretProps:FretProps = {
                        stringNumber: props.stringNumber,
                        fretNumber:i, 
                        note:getNote(props.stringNumber,i),
                    }
                    return <Fret key={i} {...fretProps}/>
                })}
            </div>
        )
    }


    // FRET COMPONENT ===========================================================
    const Fret = (props: FretProps) => {
        return (
            <div 
                className={
                    "fret" 
                    + (props.stringNumber === 1 && [3,5,7,9,15,17,19,21].includes(props.fretNumber) ? ' singlePositionMark' : '')
                    + (props.stringNumber === 1 && props.fretNumber === 12 ? ' doublePositionMarkTop' : '')
                    + (props.stringNumber === 6 && props.fretNumber === 12 ? ' doublePositionMarkBottom' : '')
                    + (props.note === intervalPageState.rootNote ? ' root-note' : '')
                    + (intervalPageState.displayMode === DisplayMode.Interval ? ' interval-selected' : '')
                }
                fret-number={props.fretNumber} 
                fret-note={props.note} 
                interval-symbol={notesToDisplay[props.note]}
                style={{ "--noteOpacity": props.note in notesToDisplay ? 1 : 0 } as React.CSSProperties}
            >
            </div>
        )
    }


    // Fretboard component 
    return (
        <div className="fretboard">
            { fretboardState.tuning.slice(0).reverse().map( (note, i) => {
                const stringProps:StringProps = {
                    stringNumber: i+1,
                    stringNote:note,
                }
                return <String key={i+1} {...stringProps}/>
            })}
        </div>
    )
    
}

export default Fretboard
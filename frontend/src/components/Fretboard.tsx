import React from 'react'
import {DisplayMode} from '../util/enums';
import { getNote } from '../util/logic'
import '../css/fretboard.css';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
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

export interface FretboardProps {
    page: string
    displayMode: DisplayMode
    numStrings: number
    numFrets: number 
    stringRange: number[]
    fretRange: number[][]
    rootNote: string
    notesToDisplay: { [key: string]: string }
}


// FRETBOARD COMPONENT =======================================================
// Structure:
// <Fretboard/>
//      <String/>         6  strings
//          <Fret/>       22 frets per string 
//          ...
///      ...

const Fretboard = (props: FretboardProps) => {
    const fretboardState = useSelector<RootState, fretboardSlice.FretboardState>(state => state.fretboard);

    const setting: FretboardProps = props 
    console.log(setting)

    const hasIntervalMode: boolean = ["/interval","/scale"].includes(setting.page)

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
        const intervalOptions = 
            (props.note === setting.rootNote ? ' root-note' : '') // is it root note?
            + (setting.displayMode === DisplayMode.Interval ? ' interval-selected' : '') // if display mode is Interval, add the attribute 
        
        
        const isStringInRange: boolean = props.stringNumber >= setting.stringRange[0] && props.stringNumber <= setting.stringRange[1];
        var isFretInRange: boolean = false;
        
        for (const r of setting.fretRange) {
            if (props.fretNumber >= r[0] && props.fretNumber <= r[1]) {
                isFretInRange = true;
            }
        }

        const noteOpacity:number = ((props.note in setting.notesToDisplay) && isStringInRange && isFretInRange) ? 1 : 0

        return (
            <div 
                className={
                    // code for drawing position mark
                    "fret" 
                    + (props.stringNumber === 1 && [3,5,7,9,15,17,19,21].includes(props.fretNumber) ? ' singlePositionMark' : '')
                    + (props.stringNumber === 1 && props.fretNumber === 12 ? ' doublePositionMarkTop' : '')
                    + (props.stringNumber === 6 && props.fretNumber === 12 ? ' doublePositionMarkBottom' : '')
                    + (hasIntervalMode ? intervalOptions : '')
                }
                fret-number={props.fretNumber} 
                fret-note={props.note} 
                interval-symbol={ hasIntervalMode ? setting.notesToDisplay[props.note] : "@"}
                style={{ "--noteOpacity": noteOpacity} as React.CSSProperties}
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
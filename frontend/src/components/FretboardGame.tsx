import React from 'react'
import {DisplayMode} from '../util/enums';
import { getNote, intervalToSymbol} from '../util/logic'
import '../css/fretboard.css';
import { useLocation } from "react-router-dom";

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


// FRETBOARD COMPONENT =======================================================
// Structure:
// <Fretboard/>
//      <String/>         6  strings
//          <Fret/>       22 frets per string 
//          ...
///      ...

const FretboardGame = (pageState: any) => {

    const location = useLocation();
    const fretboardState = useSelector<RootState, fretboardSlice.FretboardState>(state => state.fretboard);

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
                    // code for drawing position mark
                    "fret" 
                    + (props.stringNumber === 1 && [3,5,7,9,15,17,19,21].includes(props.fretNumber) ? ' singlePositionMark' : '')
                    + (props.stringNumber === 1 && props.fretNumber === 12 ? ' doublePositionMarkTop' : '')
                    + (props.stringNumber === 6 && props.fretNumber === 12 ? ' doublePositionMarkBottom' : '')
                }
                fret-number={props.fretNumber} 
                fret-note={props.note} 
                style={{ "--noteOpacity": 
                        (pageState.notesToDisplay.includes(props.note) && 
                            (location.pathname === '/fretgame' ? props.stringNumber === pageState.targetString : true) // if path is fretgame check if string is target string 
                        ) 
                        ? 1 
                        : 0 } as React.CSSProperties}
                // onClick=
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

export default FretboardGame
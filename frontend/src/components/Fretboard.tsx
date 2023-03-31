import React from 'react'
import {DisplayMode, Accidental, Unit} from '../util/enums';
import {getIntervalNoteFromRootNote, getNote, intervalToSymbol} from '../util/logic'
import '../css/fretboard.css';
import { Settings } from '@mui/icons-material';

export interface FretboardProps {
    rootNote: string
    selectedIntervals: Set<string>,
    displayMode: DisplayMode,
    noteToInterval: {[key: string]: string}
}

interface StringProps {
    stringNumber: number
    stringNote: string
    settings: FretboardProps
}

interface FretProps {
    stringNumber: number
    fretNumber: number
    note: string
    settings: FretboardProps
}

const Fret = (props: FretProps) => {

    // interval symbol for the given note 
    const intervalSymbol = intervalToSymbol[props.settings.noteToInterval[props.note]];

    return (
        <div 
            className={
                "fret" 
                + (props.stringNumber === 1 && [3,5,7,9,15,17,19,21].includes(props.fretNumber) ? ' singlePositionMark' : '')
                + (props.stringNumber === 1 && props.fretNumber === 12 ? ' doublePositionMarkTop' : '')
                + (props.stringNumber === 6 && props.fretNumber === 12 ? ' doublePositionMarkBottom' : '')
                + (props.note === props.settings.rootNote ? ' root-note' : '')
                + (props.settings.displayMode === DisplayMode.Interval ? ' interval-selected' : '')
            }
            fret-number={props.fretNumber} 
            fret-note={props.note} 
            interval-symbol={intervalSymbol}
            style={{ "--noteOpacity": props.note in props.settings.noteToInterval ? 1 : 0 } as React.CSSProperties}
        >
            {props.settings.displayMode === DisplayMode.Note ? props.note : intervalSymbol}
        </div>
    )
}

const String = (props: StringProps) => {
    const stringNumber:number = props.stringNumber
    const stringNote:string = props.stringNote 

    
    return(
        <div 
            className="string"
            string-number={stringNumber}
            string-note={stringNote}
        >
            { [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map( (i:number) => {
                const fretProps:FretProps = {
                    stringNumber: stringNumber,
                    fretNumber:i, 
                    note:getNote(stringNumber,i),
                    settings:props.settings
                }
                return <Fret {...fretProps}/>
            })}

        </div>


    )
}

const Fretboard = (props: FretboardProps) => {
    var tuning:string[] = ['E','A','D','G','B','E'];




    return (
        <div className="fretboard">
            { tuning.slice(0).reverse().map( (note, i) => {
                const stringProps:StringProps = {
                    stringNumber: i+1,
                    stringNote:note,
                    settings:props
                }
                return <String {...stringProps}/>
            })}
        </div>
    )
    
}

export default Fretboard
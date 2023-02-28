import React from 'react'
import {DisplayMode, Accidental, Unit} from '../util/enums';
import {getNote} from '../util/logic'
import '../css/fretboard.css';

export interface FretboardProps {
    rootNote: string
}

interface StringProps {
    stringNumber:number,
    stringNote:string,
    rootNote:string
}

interface FretProps {
    stringNumber:number,
    fretNumber:number,
    note:string
    rootNote:string
}

const Fret = (props: FretProps) => {
    const fretNumber:number = props.fretNumber;
    const note:String = props.note;

    return (
        <div 
            className={
                "fret" 
                + (props.stringNumber === 1 && [3,5,7,9,15,17,19,21].includes(fretNumber) ? ' singlePositionMark' : '')
                + (props.stringNumber === 1 && fretNumber === 12 ? ' doublePositionMarkTop' : '')
                + (props.stringNumber === 6 && fretNumber === 12 ? ' doublePositionMarkBottom' : '')
                + (note === props.rootNote ? ' root-note' : '')}
            fret-number={props.fretNumber} 
            fret-note={props.note} 
            // style={}
        >
            {note}
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
                    rootNote:props.rootNote
                }
                return <Fret {...fretProps}/>
            })}

        </div>


    )
}

const Fretboard = (props: FretboardProps) => {
    var displayMode: DisplayMode = DisplayMode.Note;
    var numStrings:number = 6;
    var numFrets:number = 24;
    var accidental:Accidental.Sharp;

    var tuning:string[] = ['E','A','D','G','B','E'];

    console.log(props.rootNote)

    return (
        <div className="fretboard">
            { tuning.slice(0).reverse().map( (note, i) => {
                const stringProps:StringProps = {
                    stringNumber: i+1,
                    stringNote:note,
                    rootNote:props.rootNote
                }
                return <String {...stringProps}/>
            })}
        </div>
    )
    
}

export default Fretboard
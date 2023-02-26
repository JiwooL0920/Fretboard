import React from 'react'
import {DisplayMode, Accidental, Unit} from './enums';

// const logic = () => {
//   return (
//     <div>logic</div>
//   )
// }


const notesSharp:string[] = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const notesFlat:string[] = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

var accidental:Accidental.Sharp;

var tuning:string[] = ['E','A','D','G','B','E'];


export const getNote = (string:number, fret:number) => {
    console.log("string",string)
    console.log("fret",fret)
    let notes = (accidental === Accidental.Sharp) ? notesSharp : notesFlat; 
    let note0 = tuning[tuning.length - string];
    console.log("note0",note0)
    let note0Index = notes.indexOf(note0);
    let note = notes[(note0Index + fret) % notes.length];
    console.log('note',note)
    return note;
}

// export default logic
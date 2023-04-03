import {Accidental} from './enums';

export const notesSharp:string[] = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
export const notesFlat:string[] = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

export const intervalToSemitone : {[key: string]: number} = {
    "Root": 0,
    "Minor Second" : 1, 
    "Major Second" : 2, 
    "Minor Third" : 3,  
    "Major Third" : 4,  
    "Perfect Fourth" : 5,
    "Diminished Fifth" : 6, 
    "Perfect Fifth": 7,
    "Minor Sixth" : 8, 
    "Major Sixth" : 9, 
    "Minor 7th" : 10, 
    "Major Seventh" : 11,
    "Octaves" : 12,
    // "Minor 9th" : 13,
    // "Major 9th" : 14, 
    // "Aug 9th" : 15, 
    // "11th" : 16,
    // "Aug 11th" : 17,
    // "Minor 13th" : 18, 
    // "13th" : 19
}

export const intervalToSymbol : {[key: string]: string} = {
    "Root" : "1",
    "Minor Second" : "b2", 
    "Major Second" : "2", 
    "Minor Third" : "b3",  
    "Major Third" : "3",  
    "Perfect Fourth" : "4",
    "Diminished Fifth" : "b5", 
    "Perfect Fifth": "5",
    "Minor Sixth" : "b6", 
    "Major Sixth" : "6", 
    "Minor 7th" : "b7", 
    "Major Seventh" : "7",
    "Octaves" : "8",
    // "Minor 9th" : 13,
    // "Major 9th" : 14, 
    // "Aug 9th" : 15, 
    // "11th" : 16,
    // "Aug 11th" : 17,
    // "Minor 13th" : 18, 
    // "13th" : 19
}

var accidental:Accidental.Sharp;

var tuning:string[] = ['E','A','D','G','B','E'];


export const getNote = (string:number, fret:number):string => {
    let notes = (accidental === Accidental.Sharp) ? notesSharp : notesFlat; 
    let note0 = tuning[tuning.length - string];
    let note0Index = notes.indexOf(note0);
    let note = notes[(note0Index + fret) % notes.length];
    return note;
}

export const getIntervalNoteFromRootNote = (rootNote:string, interval:string):string => {
    let notes = (accidental === Accidental.Sharp) ? notesSharp : notesFlat; 
    let i = (notes.indexOf(rootNote) + intervalToSemitone[interval]) % 12
    return notes[i]
}

export const getNotesToDisplay = (rootNote:string, intervalList: string[]): { [key: string]: string } => {
    const result:{ [key: string]: string } = {}
    for (const interval of intervalList) {
        const note:string = getIntervalNoteFromRootNote(rootNote,interval);
        result[note] = intervalToSymbol[interval];
    }
    return result 
}

// export default logic
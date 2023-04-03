import {Accidental} from './enums';

export const notesSharp:string[] = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
export const notesFlat:string[] = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];


export const intervalToSemitone : {[key: string]: number} = {
    "1": 0,
    "b2" : 1, 
    "2" : 2, 
    "b3" : 3,  
    "3" : 4,  
    "4" : 5,
    "b5" : 6, 
    "5": 7,
    "b6" : 8, 
    "6" : 9, 
    "b7" : 10, 
    "7" : 11,
    "8" : 12,
    // "Minor 9th" : 13,
    // "Major 9th" : 14, 
    // "Aug 9th" : 15, 
    // "11th" : 16,
    // "Aug 11th" : 17,
    // "Minor 13th" : 18, 
    // "13th" : 19
}

export const intervalSymbolToName : {[key: string]: string} = {
    "1" : "Root",
    "b2" : "Minor Second", 
    "2" : "Major Second", 
    "b3" : "Minor Third",  
    "3" : "Major Third",  
    "4" : "Perfect Fourth",
    "b5" : "Diminished Fifth", 
    "5" : "Perfect Fifth",
    "b6" : "Minor Sixth", 
    "6" : "Major Sixth", 
    "b7" : "Minor 7th", 
    "7" : "Major Seventh",
    "8" : "Octaves",
    // "Minor 9th" : 13,
    // "Major 9th" : 14, 
    // "Aug 9th" : 15, 
    // "11th" : 16,
    // "Aug 11th" : 17,
    // "Minor 13th" : 18, 
    // "13th" : 19
}

export const scaleToInterval: { [key: string]: string[] } = {
    "Minor Pentatonic": ["1", "b3", "4", "5", "b7"],
    "Blues Scale": ["1", "b3", "4", "b5", "5", "b7"]
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

export const getNotesToDisplayFromIntervals = (rootNote:string, intervalList: string[]): { [key: string]: string } => {
    const result:{ [key: string]: string } = {}
    for (const interval of intervalList) {
        const note:string = getIntervalNoteFromRootNote(rootNote,interval);
        result[note] = interval;
    }
    return result 
}

export const getNotesToDisplayFromScale = (rootNote:string, scale: string): { [key: string]: string } => {
    const result: { [key: string]: string } = {}
    for (const interval of scaleToInterval[scale]) {
        const note:string = getIntervalNoteFromRootNote(rootNote, interval);
        result[note] = interval;
    }
    return result 
}


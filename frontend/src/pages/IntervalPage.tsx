import React, {useState} from 'react'
import Fretboard, {FretboardProps} from '../components/fretboard/Fretboard'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const IntervalPage = () => {
    const [rootNote, setRootNote] = useState("C");

    const handleChange = (event: SelectChangeEvent) => {
        setRootNote(event.target.value as string);
    };

    const fretboardProps:FretboardProps = {
        rootNote : rootNote
    }


    return (
        <div className="interval-page">
            <h1>Interval Page</h1>
            <Fretboard {...fretboardProps}/>
        

            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rootNote}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={"C"}>C</MenuItem>
                <MenuItem value={"D"}>D</MenuItem>
                <MenuItem value={"E"}>E</MenuItem>
                </Select>
            </FormControl>
            </Box>

            <div>Root Note: {rootNote}</div>

        </div>
  

    )
}

export default IntervalPage
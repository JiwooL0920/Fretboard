import Fretboard, { FretboardProps } from '../components/Fretboard'
import {getNotesToDisplayFromScale} from '../util/logic'

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
        
    return (
        <div className="scale-page">
            <h1>ScalePage</h1>
            <Fretboard {...fretboardProps}/>
        </div>
        
    )
}

export default ScalePage
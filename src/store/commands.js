import { createSlice } from '@reduxjs/toolkit';
import Table from "../components/table";

import Place from "../commands/place"
import Move from "../commands/move";
import Rotate from "../commands/rotate"
import Report from "../commands/report"

// Forms link to the commands
const slice = createSlice({
    name: 'state',
    initialState: {},
    reducers: {
        moveUnit: (state, action) => {  
           let moveItem =  new Move(state, action, 1);
           moveItem.execute();
        },
        rotateUnit: (state, action) => {   
            let rotateItem =  new Rotate(state, action);
            rotateItem.execute();      
        },
        placeUnit: (state, action) => {
           let placeItem =  new Place(state, action);
           placeItem.execute();           
        },
        reportUnit: (state, action) => {
            let reportItem =  new Report(state, action);
            reportItem.execute();       
        }
    }
})

export const {moveUnit, rotateUnit, placeUnit, reportUnit} = slice.actions;
export default slice.reducer;
/****************************************************
* Purpose: Contains reducer for Redux store
*****************************************************/

import { createSlice } from '@reduxjs/toolkit';
import Table from "../components/table";

import Place from "../commands/place"
import Move from "../commands/move";
import Rotate from "../commands/rotate"
import Report from "../commands/report"
import { command } from '../commands/command';
import commandList from '../constants/commandList';

/**
* Creates the reducer to be used by store. Forms links to the commands
*/    
const slice = createSlice({
    name: 'state',
    initialState: {},
    reducers: {
        moveUnit: (state, action) => {  
           var moveItem =  new Move(state, action, 1);
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
        },
        undo: (state, action) => {
            state.x = state.xPrev;
            state.y = state.yPrev;
            state.direction = state.directionPrev;
        }        
    }
})

export const {moveUnit, rotateUnit, placeUnit, reportUnit, undo} = slice.actions;
export default slice.reducer;

// Selector - Takes state and returns computed state
export const getDirection = state => {
    return state.direction;
}
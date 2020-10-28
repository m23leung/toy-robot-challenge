import { createSlice } from '@reduxjs/toolkit';
import { place } from '../commands/place';
import { move } from '../commands/move';
import { rotate } from '../commands/rotate';
import { report } from '../commands/report';

// Forms link to the commands
const slice = createSlice({
    name: 'state',
    initialState: {},
    reducers: {
        moveUnit: (state, action) => {    
           move(state, action);
        },
        rotateUnit: (state, action) => {   
            rotate(state, action);
        },
        placeUnit: (state, action) => {
           place(state, action);
        },
        reportUnit: (state, action) => {
            report(state, action);
        }
    }
})

export const {moveUnit, rotateUnit, placeUnit, reportUnit} = slice.actions;
export default slice.reducer;
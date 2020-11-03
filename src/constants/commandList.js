/****************************************************
* Purpose: Stores the user input commands
*****************************************************/

import sides from "../constants/sides";

let commandList = {
    MOVE: 'MOVE',
    REPORT: 'REPORT',
    PLACE: 'PLACE',
    READ: 'READ',
    UNDO: 'UNDO',
    ...sides
};

export default Object.freeze(commandList);
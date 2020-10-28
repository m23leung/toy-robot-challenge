// Stores the commands
import sides from "../constants/sides";

// Stores the commands

let commandList = {
    MOVE: 'MOVE',
    REPORT: 'REPORT',
    PLACE: 'PLACE',
    READ: 'READ',
    ...sides
};

export default Object.freeze(commandList);
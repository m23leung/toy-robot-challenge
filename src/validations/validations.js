/****************************************************
* Purpose: Contains all the validation functions
*****************************************************/

import { invalidDirection, invalidPlacement, invalidArguments, unassignedBoard } from "../constants/errorMessages";
import directions from "../constants/directions";

export const isValidMove = (x, xMaxLength, y, yMaxLength) => {
    //console.log(x,xMaxLength, y,yMaxLength);
    if ( (x > xMaxLength ) || (x < 0) || (y < 0) || (y > yMaxLength )) {
        console.log(invalidPlacement);
        return false;
    }
    return true;
}

export const isValidDirection = (direction) => {
    if ( !directions[direction]) {
        console.log(invalidDirection);
        return false;
    }
    return true;
}

export const hasArgs = (commandArgs) => {
    if (!commandArgs) {
        console.log(invalidArguments);
        return false;
    }
    return true;
}

export const isValidPlaceArgs = (commandArgs) => {

        if (!hasArgs(commandArgs)) return false;

        let [x,y,f] = commandArgs.split(',');   

        // If not all args entered, or arguments x,y not number, then throw invalid arg error
        if (!y || !f || isNaN(parseInt(x)) || isNaN(parseInt(y)) ) {
            console.log(invalidArguments);
            return false;
        }

        return true;
}

export const isRobotOnTable = (robot) => {
    if (!robot.table) {
        console.log(unassignedBoard);
        return false;
    }
    return true;
}
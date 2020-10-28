import { invalidDirection, invalidPlacement } from "../constants/errorMessages";
import directions from "../constants/directions";

export const isValidMove = (x, xMaxLength, y, yMaxLength) => {
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
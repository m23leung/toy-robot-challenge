
import { isValidMove, isValidDirection } from "../validations/validations";

export const place = (state, action) => {

    const { x, y, direction, xMax, yMax } = action.payload;      
    
    // Only place unit if within table boundaries and valid direction
    if ( isValidMove(x, xMax, y, yMax) && 
         isValidDirection(direction) ) {

         // Set unit coordinates and direction
         state.x = x;
         state.y = y;
         state.direction = direction;
         
         // Set placed flag
         state.isPlaced = true;

         // Set table dimensions
         state.xMax = xMax;
         state.yMax = yMax;
    }

}
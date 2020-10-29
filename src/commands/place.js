
/*******************************
* Purpose: Place command 
********************************/

import { isValidMove, isValidDirection } from "../validations/validations";
import { command } from "./command";

export default class place extends command {
    
    execute() {
        this.placeUnit();   
    }

 /**
 * Places the unit on the board.
 * If the unit tries to place outside boundaries or provides 
 * an invalid direction, it will ignore the command.
 */   
    placeUnit() {
        const { x, y, direction, xMax, yMax } = this.action.payload;      
        let state = this.state;

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
}
/*******************************
* Purpose: Move command 
********************************/

import { isValidMove } from "../validations/validations";
import directions from "../constants/directions";
import { command } from "./command";
import { moveParseError } from "../constants/errorMessages";

export default class move extends command {

    constructor(state, action, steps) {
      super(state, action);
      this.steps = steps;
    }

    execute() {
        this.moveUnit(this.steps);   
        return this;
    }

/**
 * Moves the unit X steps in the facing direction.
 * If the unit tries to move outside boundaries, 
 * it will ignore the command.
 * @param  steps
 */
    moveUnit(steps) {
        // Pull data out from current state
        let state = this.state;
        let { x, y, direction, xMax, yMax } = state; 
    
        // Convert to Integer
        steps = parseInt(steps);
        x = parseInt(x);
        y = parseInt(y);

        // If unexpected parse issue, flag as error
        if (isNaN(steps) || isNaN(x) || isNaN(y)) {
            console.log(moveParseError);
            return;
        }

        // Set previous state to current coordinates
        let xPrev = x;
        let yPrev = y;
        let directionPrev = direction;

        // Calculate newly moved destination
        switch(direction) {
            case directions.NORTH:
                y+= steps;
                break;
            case directions.SOUTH:
                y-= steps;
                break;  
            case directions.EAST:
                x+= steps;
                break;       
            case directions.WEST:
                x-= steps;
                break;                                                               
        }

        // Only finalize moving unit if it is valid within table boundaries
        if (isValidMove(x, xMax, y, yMax)) {

            state.xPrev = parseInt(xPrev);
            state.yPrev = parseInt(yPrev);
            state.directionPrev = direction;

            state.x = parseInt(x);
            state.y = parseInt(y);  
            state.direction = direction;  
        }       
    }
  }
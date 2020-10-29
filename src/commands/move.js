
import { isValidMove } from "../validations/validations";
import directions from "../constants/directions";
import { command } from "./command";

export default class move extends command {

    constructor(state, action, steps) {
      super(state, action);
      this.steps = steps;
    }

    execute() {
        this.moveUnit(this.steps);   
    }

    undo() {
        let state = this.state;
        state.x = state.xPrev;
        state.y = state.yPrev;
    }

    moveUnit(steps) {
        // Pull data out from current state
        let state = this.state;
        let { x, y, direction, xMax, yMax } = state; 
        
        let xPrev = x;
        let yPrev = y;

        // Convert to Integer
        steps = parseInt(steps);
        y = parseInt(y);

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

            state.x = parseInt(x);
            state.y = parseInt(y);    
        }       
    }
  }
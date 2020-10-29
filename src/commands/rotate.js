import directions from "../constants/directions";
import sides from "../constants/sides";
import { command } from "./command";

export default class rotate extends command {

    execute() {
        this.rotateUnit();   
    }

    undo() {
        // TODO: to implement
    }

    rotateUnit() {

        const { direction } = this.state; 
        let { side } = this.action.payload;
        let state = this.state;
        let updatedDirection;
        
        let directionsList = [
            directions.NORTH,
            directions.EAST,
            directions.SOUTH,
            directions.WEST
        ];

        const findIndex = directionsList.findIndex(element => element === direction);

        if (side === sides.RIGHT) {             

            if (findIndex === directionsList.length - 1 ) updatedDirection = directionsList[0];
            else updatedDirection = directionsList[findIndex+1];

        // Then assume (side === sides.LEFT)
        } else {

            if (findIndex === 0 ) updatedDirection = directionsList[directionsList.length - 1 ];
            else updatedDirection = directionsList[findIndex-1];
            
        }            
        
        state.direction = updatedDirection;
    }

}
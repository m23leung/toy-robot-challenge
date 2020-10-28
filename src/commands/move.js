
import directions from "../constants/directions";
import { isValidMove, isValidDirection } from "../validations/validations";

export const move = (state, action) => {

            // Pull data out from current state
            let { x, y, direction, xMaxLength, yMaxLength } = state; 
        
            // Calculate newly moved destination
            switch(direction) {
                case directions.NORTH:
                    y++;
                    break;
                case directions.SOUTH:
                    y--;
                    break;  
                case directions.EAST:
                    x++;
                    break;       
                case directions.WEST:
                    x--;
                    break;                                                               
            }

            // Only finalize moving unit if it is valid within table boundaries
            if (isValidMove(x, xMaxLength, y, yMaxLength)) {
                state.x = parseInt(x);
                state.y = parseInt(y);    
            }
}
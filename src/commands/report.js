/*******************************
* Purpose: Report command 
********************************/

import { command } from "./command";

export default class rotate extends command {

    execute() {
        this.reportUnit();  
        return this;
    }

 /**
 * Outputs the current location of the unit.
 */       
    reportUnit() {
        const { x, y, direction } = this.state;   
        console.log(`${x},${y},${direction}`);              
    }

}
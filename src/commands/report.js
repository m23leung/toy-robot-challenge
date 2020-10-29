/*******************************
* Purpose: Report command 
********************************/

import { command } from "./command";

export default class rotate extends command {

    execute() {
        this.reportUnit();  
    }

    reportUnit() {
        const { x, y, direction } = this.state;   
        console.log(`ROBOT LOCATION (x,y,direction) - (${x},${y}) ${direction} Direction`);              
    }

}
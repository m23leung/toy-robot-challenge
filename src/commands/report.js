import { command } from "./command";

export default class rotate extends command {

    execute() {
        this.reportUnit();  
    }

    undo() {
        // TODO: to implement
    }

    reportUnit() {
        const { x, y, direction } = this.state;   
        console.log(`ROBOT LOCATION (x,y,direction) - (${x},${y}) ${direction} Direction`);              
    }

}
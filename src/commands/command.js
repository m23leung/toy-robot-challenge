/****************************************************
* Purpose: Parent command class
*****************************************************/

export class command {
    
    constructor(state, action) {
        this.state = state;
        this.action = action;
    }

    execute() {
        // Placeholder for execute
    }

    undo() {
        // Placeholder for undo
    }
}
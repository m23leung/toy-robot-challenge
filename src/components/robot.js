/**************************************************************************
* Purpose: Robot class - performs command actions based on user input
***************************************************************************/

import configureStore from '../store/store';
import { handleCommand } from './parser';
import { notOnBoard } from "../constants/errorMessages";
import commandList from "../constants/commandList";

import chalk from "chalk";
const colors = require('colors');

// Initialize store
const store = configureStore();

export default class robot {

    constructor() {
        
        var table = null;
        var robotState = store.getState();
        
        var x = 0;
        var y = 0;
        var direction = null;

        //var prevState = {};
        //var history = []
    } 

    /**
    * Prints welcome & available commands message
    */   
    printMessage() {
        console.log('Welcome to the toy robot.'.green.bold);
        console.log('');
        console.log('These are the valid commands:'.bold);
        console.log('');
        console.log('PLACE x,y,f'.bold.underline);
        console.log('- Where x and y is coordinates and f (facing) must be either NORTH, SOUTH, WEST or EAST');
        console.log('MOVE'.bold.underline);
        console.log('- Will move the robot one unit in current direct');
        console.log('LEFT'.bold.underline);
        console.log('- Will rotate the robot 90 degrees to the left');
        console.log('RIGHT'.bold.underline);
        console.log('- Will rotate the robot 90 degrees to the right');
        console.log('REPORT'.bold.underline);
        console.log('- The robot will say the current position and facing direction');
        console.log('READ textfiles/example.txt'.bold.underline);
        console.log('- You can use any textfile on your computer. The robot will execute all valid commands.');

        console.log();
        console.log('----------------------------------------------------------------------------------');
        console.log();
        console.log('You have a table size of 5x5 units to play with.');
        console.log('Please note that our robot is smart and will not do anything that can hurt him.');
        console.log('He will ignore commands making him fall out of the table.');
        console.log('Also note that he wont listen to any commands if you haven\'t placed him.');
        console.log('If you try to kill him or using invalid commands he will try to tell you what went wrong.');
        console.log();        
    }
    
    getState() {
        this.robotState = store.getState();
        return this.robotState;
    }

    setTable(table) {
        this.table = table;
    }

    getTable() {
        return this.table;
    }

    /**
    * Processes the input from command line
    * If user enters invalid commands, they will be rejected
    * @param  input
    */       
    handleCommand(input) {
        
        if (!input.trim()) return;

        const action = handleCommand(input, this);
        if (action === undefined) return;

        // Check whether command is an initial valid command (Ex: PLACE, READ)
        const commandType = input.split(" ")[0];
        const initialValidCommands = [commandList.PLACE, commandList.READ];
        const isInitValidCommand = initialValidCommands.find(element => element === commandType);

        // If not inside initial valid commands, need to check if placed flag before executing
        if ( store.getState().isPlaced || isInitValidCommand) {
            action.forEach(store.dispatch);  
        } else {
            console.log(notOnBoard);
        }
    }
}
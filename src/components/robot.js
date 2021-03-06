/**************************************************************************
* Purpose: Robot class - performs command actions based on user input
***************************************************************************/

import configureStore from '../store/store';
import { handleCommand } from './parser';
import { notOnBoard } from "../constants/errorMessages";
import commandList from "../constants/commandList";
import Parser from "./parser";
import { getDirection } from '../store/storeReducer';

import chalk from "chalk";
const colors = require('colors');

// Initialize store
const store = configureStore();

export default class robot {

    constructor() {
        this.table = null;
        this.parser = new Parser();
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
        console.log('- Where x and y are coordinates and f (facing) must be either NORTH, SOUTH, WEST or EAST');
        console.log('MOVE'.bold.underline);
        console.log('- Will move the robot one unit in the current direction');
        console.log('LEFT'.bold.underline);
        console.log('- Will rotate the robot 90 degrees to the left');
        console.log('RIGHT'.bold.underline);
        console.log('- Will rotate the robot 90 degrees to the right');
        console.log('REPORT'.bold.underline);
        console.log('- The robot will output the current position and facing direction');
        console.log('READ textfiles/example.txt'.bold.underline);
        console.log('- You can use any textfile on your computer. The robot will execute all the valid commands within.');
        console.log('EXIT'.bold.underline);
        console.log('- Will close the program');
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
        
        //console.log(store.getState());
        //const direction = getDirection(store.getState());
        //console.log("DIRECTION IS: ", direction);

        if (!input.trim()) return;    
        input = input.toUpperCase().trim();

        const action = this.parser.parseCommand(input, this);
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
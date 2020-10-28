import chalk from "chalk";
const colors   = require('colors');

export default class robot {

    constructor() {
        
        this.table = null
        this.robotPlaced = false;
        this.x = 0;
        this.y = 0;
        this.direction = null;
        //this.history = [];
    } 

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
    
    setTable(table) {
        this.table = table;
    }


}
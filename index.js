/* This is the main entry program */

// Package Imports
import Robot from "./src/components/robot";
import Table from "./src/components/table";

// Initialize the robot
let length = 5;
let width = 5;
let robot = new Robot(board);
let board = new Table(length, width);
robot.setTable(board);

// Print the menu screen details
robot.printMessage();

// **********************************
//   ReadLine Input - User Interface
// **********************************

const readline = require('readline')

// Initialize input receiver
const readLine = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Retrieve User Input
readLine.on("line", (input) => { 
    robot.handleCommand(input);
    readLine.prompt(); 
});

// Set Ending Prompt
readLine.on("close", () => {
    console.log("\nSee you later!!!");
    process.exit(0);
});

// Trigger User Prompt
readLine.setPrompt('ToyRobo> ');
readLine.prompt();
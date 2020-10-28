console.log("TOY ROBOT CHALLENGE");

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
    readLine.prompt(); 
});

// Set Ending Prompt
readLine.on("close", () => {
    console.log("\nGOODBYE !!!");
    process.exit(0);
});

// Trigger User Prompt
readLine.setPrompt('ToyRobo> ');
readLine.prompt();
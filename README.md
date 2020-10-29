# Toy Robot Challenge

Toy robot is a program that permits a robot to be controlled from your terminal. It drives around on a 5*5 board and listens to the following commands:

- PLACE X,Y,F - Places the robot to on X,Y coordinates facing NORTH, SOUTH, EAST or WEST.
- MOVE - Moves 1 unit in facing direction
- LEFT - Rotates 90 degrees to left
- RIGHT - Rotates 90 degrees to right
- REPORT - Reports current position and facing direction
- READ path/file.txt - Reads a .txt file. Sample test files are provided in the textfiles folder

## Technology Stack
- Javascript
- Immer
- Redux
- Mocha / Chai

## Installation and Usage
Note: Please make sure to have node.js installed.

1. Navigate to the root directory and run:
> npm install

2. Now run the application with:
> npm start

3. You can run the test suite by:
> npm test

## Design desions
I have developed this program in mostly an OOP approach, where ES6 classes are used to preserve encapsulation. Redux was used to manage the state of the robot's location on the board. It can also be used to store the previous state and other useful properties. By using the store and action reducers, we are able to execute the appropriate commands for the robot. Immer was chosen to replicate the syntax for mutable objects, while preserving immutability behind the scenes. 

In terms of the flow of the program, the table gets initialized. Afterwards, the robo gets initialized, which then initializes the parser. When the user inputs a command, it goes through the parser, which parses the command and invokes the redux store to process it. The validation functions are used to validate and throw appropriate error messages. The redux store will then dispatch the appropriate command to be executed. Once the command is executed, the state will be mutated and saved. In our case, this means the robot's state on the board is saved after successfully executing the correct commands from the terminal.

## Conclusion
If I were to add more features, I would finish incorporating the UNDO functionality, and add the ability to move several steps at a time. There is also room to incorporate error logging.
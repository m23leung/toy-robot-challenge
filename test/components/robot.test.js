/****************************************************
* Purpose: Contains test functions for robot class
*****************************************************/

import { expect } from 'chai';
import Robot from "../../src/components/robot";
import Table from "../../src/components/table";

describe("robot - Valid - Integration Test", function() {
  
      const executeCommands = (robot, commandsList) => {
        commandsList.map(commands => {
          commands.map(command => {
            robot.handleCommand(command);
          })
        })
      }

      // Integration testing done here
      let commandsList = [ [ "PLACE 0,0,NORTH",
                         "MOVE",
                         "REPORT"],

                         [ "PLACE 0,0,NORTH",
                         "RIGHT",
                         "MOVE",
                         "MOVE",
                         "MOVE",
                         "LEFT",
                         "REPORT"],

                         ["READ testfiles/example.txt"],
                         ["READ testfiles/example1.txt"],
                         ["READ testfiles/example2.txt"]
                                ];

      let length = 5;
      let width = 5;
      let board = new Table(length, width);
      let robot = new Robot(board);

      it(`Valid - Integration Test`, function() {
        // Have not been assigned to board, should throw error
        executeCommands(robot, commandsList);
        
        // Assign board, should be OK now
        robot.setTable(board);
        executeCommands(robot, commandsList);

      })
    
});
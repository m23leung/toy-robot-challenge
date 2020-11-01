/****************************************************
* Purpose: Contains test functions for validations 
*****************************************************/

import { expect } from 'chai';
import { isValidMove, isValidDirection, isValidPlaceArgs, isRobotOnTable } from "../../src/validations/validations";
import directions from "../../src/constants/directions";
import Robot from "../../src/components/robot";
import Table from "../../src/components/table";

describe("validations - Valid Moves", function() {
      // [x,y, xMaxLength, yMaxLength]
      let validMoves = [[4,4,1,4], [0,4,0,4],[2,4,3,4],[4,4,4,4], [0,0,0,0], [3,4,1,4]];

      validMoves.map( validMove => {
        it(`Valid Move ${validMove}`, function() {
          let isTrue = isValidMove(validMove[0], validMove[1], validMove[2], validMove[3]);
          expect(isTrue).to.be.equal(true);
        });      
      });
    });

describe("validations - Invalid Moves", function() {
       // [x,y, xMaxLength, yMaxLength] 
      let invalidMoves = [ [2,4,6,4], [6,4,0,4], [5,4,6,4]];  

      invalidMoves.map( invalidMove => {
        it(`Invalid Move ${invalidMove}`, function() {
          let isFalse = isValidMove(invalidMove[0], invalidMove[1], invalidMove[2], invalidMove[3]);
          expect(isFalse).to.be.equal(false);
        });      
      });
});

describe("validations - Valid Directions", function() {

    for (let direction in directions) {
      it(`Valid Direction - ${direction}`, function() {
        let isTrue = isValidDirection(direction);
        expect(isTrue).to.be.equal(true);
      });
    }
});

describe("validations - Invalid Directions", function() {
    
    let invalidDirections = ["MARS", 43232, ""];

    invalidDirections.map( direction => {
      it(`Invalid Direction ${direction}`, function() {
        let isFalse = isValidDirection(direction);
        expect(isFalse).to.be.equal(false);
      });
    });
});

describe("validations - Place Args", function() {
    
    it(`Place Args True`, function() {
      let isTrue = isValidPlaceArgs("1,2,NORTH");
      expect(isTrue).to.be.equal(true);
    });

    it(`Place Args False`, function() {
      let isFalse = isValidPlaceArgs("1");
      expect(isFalse).to.be.equal(false);
    });

    it(`Place Args False 2`, function() {
      let isFalse = isValidPlaceArgs("1,2");
      expect(isFalse).to.be.equal(false);
    });

    it(`Place Args - X not Int`, function() {
      let isFalse = isValidPlaceArgs("TEST,2");
      expect(isFalse).to.be.equal(false);
    });

    it(`Place Args - Y not Int`, function() {
      let isFalse = isValidPlaceArgs("1,TEST");
      expect(isFalse).to.be.equal(false);
    });
});

describe("validations - robot on table", function() {

    // Initialize table
    let length = 5;
    let width = 5;
    let board = new Table(length, width);

    // Initialize robot
    let robot = new Robot();

    it(`Robot not on table`, function() {
      let isFalse = isRobotOnTable(robot);
      expect(isFalse).to.be.equal(false);
    });

    it(`Robot on table`, function() {
      robot.setTable(board);
      let isTrue = isRobotOnTable(robot);
      expect(isTrue).to.be.equal(true);
    });
});

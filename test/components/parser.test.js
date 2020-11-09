/****************************************************
* Purpose: Contains test functions for parser
*****************************************************/

import { expect } from 'chai';
import Parser, { isFileTypeTxt, parseReadCommand } from '../../src/components/parser'; 
import Robot from "../../src/components/robot";
import Table from "../../src/components/table";

describe("Parser - Valid Parser", function() {
    
    let parser = new Parser();
    let paths = ["testfiles/example.txt"]

    paths.map( (path) => {

        it(`Parser - isFileTypeTxt - ${path}`, function() {
            let isTrue = isFileTypeTxt(path);
            expect(isTrue).to.be.equal(true);
        })  

        it(`Parser - parseReadCommand ${path}`, function() {
            let isTrue = parseReadCommand(path);
            expect(isTrue).to.not.be.equal([]);
        })  
        
        it(`Parser - parseCommand READ`, function() {

            let board = new Table(5, 5);
            let robot = new Robot();
            robot.setTable(board);

           let isTrue = parser.parseCommand(`READ ${path}`, robot);
           expect(isTrue).to.have.length(0);
        })  
        

        it(`Parser - parseCommand empty`, function() {

            let board = new Table(5, 5);
            let robot = new Robot();
            robot.setTable(board);

           let isTrue = parser.parseCommand(``, robot);
           expect(isTrue).to.have.length(0);
        })  
    }) 
    
});
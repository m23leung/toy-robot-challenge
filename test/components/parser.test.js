/****************************************************
* Purpose: Contains test functions for parser
*****************************************************/

import { expect } from 'chai';
import Parser from '../../src/components/parser'; 

describe("Parser - Valid Parser", function() {
    
    let parser = new Parser();
    let paths = ["testfiles/example.txt"]

    paths.map( (path) => {

        it(`Parser Helper - parserCommand REPORT`, function() {
            let isTrue = parser.parseCommand("REPORT");
           expect(isTrue).to.not.be.equal([]);
        })  

        // TODO: Add more cases?
    }) 
    
});
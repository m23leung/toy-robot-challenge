import { assert, expect } from 'chai';
import { isFileTypeTxt, handleReadCommand, handleCommand } from '../../src/components/helper'; 

describe("helper - Valid Helper", function() {
    
    let paths = ["testfiles/example.txt"]

    paths.map( (path) => {

        it(`Valid Helper - isFileTypeTxt - ${path}`, function() {
            let isTrue = isFileTypeTxt(path);
            expect(isTrue).to.be.equal(true);
        })  

        it(`Valid Helper - handleReadCommand ${path}`, function() {
            let isTrue = handleReadCommand(path);
            expect(isTrue).to.not.be.equal([]);
        })  

        //it(`Valid Helper - handleCommand REPORT`, function() {
        //    let isTrue = handleCommand("REPORT");
        //   expect(isTrue).to.not.be.equal([]);
        //})  

        // TODO: Add more cases?
    }) 

    
});
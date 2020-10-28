import { assert, expect } from 'chai';
import Table from "../../src/components/table";

describe("table - Valid Table", function() {
  
      let tableDimensionsList = [ 
                                    {'xLength': 5, 'yLength': 5},
                                    {'xLength': 10, 'yLength': 10},
                                ];

      // Test Case #1: Create Table
      tableDimensionsList.map( tableDimensions => {
        it(`Create Table - ${tableDimensions.xLength}x${tableDimensions.yLength}`, function() {
          let table = new Table(tableDimensions.xLength, tableDimensions.yLength);

          expect(table.getX()).to.be.equal(tableDimensions.xLength - 1);
          expect(table.getY()).to.be.equal(tableDimensions.yLength - 1);
        });     
      });
   
      // Test Case #2: Change Table Size 
      let oldDimensions = tableDimensionsList[0];
      let newDimensions = {'xLength': 15, 'yLength': 15} ;

      it(`Change Table Size - ${oldDimensions.xLength}x${oldDimensions.yLength} to ${newDimensions.xLength}x${newDimensions.yLength}`, function() {       
        
        let table = new Table(oldDimensions.xLength, oldDimensions.yLength);
        table.changeSize(newDimensions.xLength, newDimensions.yLength);

        expect(table.getX()).to.be.equal(newDimensions.xLength - 1);
        expect(table.getY()).to.be.equal(newDimensions.yLength - 1); 
      });

});
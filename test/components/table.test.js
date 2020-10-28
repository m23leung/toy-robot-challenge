import { assert, expect } from 'chai';
import Table from "../../src/components/table";

describe("table - Valid Table", function() {
  
      let tableDimensionsList = [ 
                                    {'tableWidth': 5, 'tableLength': 5},
                                    {'tableWidth': 10, 'tableLength': 10},
                                ];

      tableDimensionsList.map( tableDimensions => {
        it(`Create Table - ${tableDimensions.tableWidth}x${tableDimensions.tableLength}`, function() {
          let table = new Table(tableDimensions.tableWidth, tableDimensions.tableLength);
          let tableBoundaries = table.getBoundaries();

          expect(tableBoundaries.x2).to.be.equal(tableDimensions.tableWidth - 1);
          expect(tableBoundaries.y2).to.be.equal(tableDimensions.tableLength - 1);

        });      
      });

});
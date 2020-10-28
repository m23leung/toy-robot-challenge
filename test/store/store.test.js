import { assert, expect } from 'chai';
import configureStore from '../../src/store/store';
import sides from "../../src/constants/sides";
import { reportUnit, rotateUnit, placeUnit, moveUnit } from '../../src/store/commands';
import directions from "../../src/constants/directions";

// Testing here includes for both files commands/commands & commands/store
describe("Redux store test", function() {

    const store = configureStore();

    it(`Configured properly Redux store`, function() {

        // Should be empty
        expect(store.getState().length).to.equal({}.length);

    });   
     
    it(`Testing command - place`, function() {

        // Modify the state
        store.dispatch(placeUnit(
            { 'x': 1,
              'y': 1, 
              'direction': 'NORTH',
              'xLength': 5,
              'yLength': 5
            }));

            // (x,y) = (1,1)
            expect(store.getState().x).equal(1);
            expect(store.getState().y).equal(1);      

      });

    it(`Testing command - move`, function() {

        // Move unit on y-axis by 3 from (1,1) -> (1,4)
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());
        expect(store.getState().x).equal(1);
        expect(store.getState().y).equal(4);      
        
    });

    it(`Testing command - rotate`, function() {
            
        // Final direction is NORTH -> WEST
        store.dispatch(rotateUnit({'side': sides.LEFT}));
        store.dispatch(rotateUnit({'side': sides.LEFT}));
        store.dispatch(rotateUnit({'side': sides.RIGHT}));
        expect(store.getState().direction).equal(directions.WEST);  
           
      });   
      
    it(`Redux state - report location`, function() {
        
        let result = store.dispatch(reportUnit());
        console.log("RESULT: ", result);
        
    });      

  });
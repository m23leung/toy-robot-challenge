/****************************************************
* Purpose: Contains test functions for reducer store
*****************************************************/

import { expect } from 'chai';
import configureStore from '../../src/store/store';
import { reportUnit, rotateUnit, placeUnit, moveUnit } from '../../src/store/storeReducer';
import directions from "../../src/constants/directions";
import sides from "../../src/constants/sides";

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
          { 'x': 3,
            'y': 2, 
            'direction': 'NORTH',
            'xLength': 4,
            'yLength': 4
          }));

          // (x,y) = (1,1)
          expect(store.getState().x).equal(3);
          expect(store.getState().y).equal(2);      

        // Modify the state
        store.dispatch(placeUnit(
            { 'x': 1,
              'y': 1, 
              'direction': 'NORTH',
              'xLength': 4,
              'yLength': 4
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
          
        store.dispatch(rotateUnit({'side': sides.LEFT}));
        expect(store.getState().direction).equal(directions.WEST);          
        store.dispatch(rotateUnit({'side': sides.LEFT}));
        store.dispatch(rotateUnit({'side': sides.RIGHT}));
        expect(store.getState().direction).equal(directions.WEST);  
        store.dispatch(rotateUnit({'side': sides.RIGHT}));
        expect(store.getState().direction).equal(directions.NORTH);
           
      });   
      
    it(`Testing command - report`, function() {
        
        let result = store.dispatch(reportUnit());
  
    });      

    it(`Testing command - combinations`, function() {
        
      store.dispatch(placeUnit(
        { 'x': 1,
          'y': 1, 
          'direction': 'NORTH',
          'xLength': 4,
          'yLength': 4
        }));

        store.dispatch(rotateUnit({'side': sides.LEFT}));
        store.dispatch(rotateUnit({'side': sides.LEFT}));
        store.dispatch(moveUnit());
        store.dispatch(rotateUnit({'side': sides.RIGHT}));
        store.dispatch(moveUnit());
        expect(store.getState().x).equal(0);
        expect(store.getState().y).equal(0);  
        expect(store.getState().direction).equal(directions.WEST);
        store.dispatch(rotateUnit({'side': sides.RIGHT}));   
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());     
        expect(store.getState().x).equal(0);
        expect(store.getState().y).equal(4);   
        expect(store.getState().direction).equal(directions.NORTH);
        store.dispatch(rotateUnit({'side': sides.RIGHT}));           
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());  
        expect(store.getState().x).equal(4);
        expect(store.getState().y).equal(4);
        expect(store.getState().direction).equal(directions.EAST);     
        store.dispatch(rotateUnit({'side': sides.LEFT}));
        store.dispatch(rotateUnit({'side': sides.LEFT}));
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());
        store.dispatch(moveUnit()); 
        expect(store.getState().x).equal(0);
        expect(store.getState().y).equal(4);  
        expect(store.getState().direction).equal(directions.WEST);  
        store.dispatch(rotateUnit({'side': sides.RIGHT}));   
        store.dispatch(rotateUnit({'side': sides.RIGHT}));  
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());
        store.dispatch(moveUnit());     
        expect(store.getState().x).equal(4);
        expect(store.getState().y).equal(4);  
        expect(store.getState().direction).equal(directions.EAST);                                
    });      

  });
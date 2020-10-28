
import { placeUnit, moveUnit, rotateUnit, reportUnit, readFile } from '../store/commands';
import { invalidCommand, invalidArguments, invalidFileExt, fileNotFound, unassignedBoard } from '../constants/errorMessages';
import { isFileTypeTxt, handleReadCommand } from './helper'; 
import commandList from "../constants/commandList";

const handleCommand = (input, robot) => {

    const command = input.toUpperCase().trim();
    const [commandType, commandArguments] = command.split(' ');    

            // Trigger the respective command
            switch(commandType) {
                case commandList.LEFT:
                case commandList.RIGHT:
                    return [rotateUnit({ 'side': commandType})];
                case commandList.REPORT:
                    return [reportUnit()];    
                case commandList.MOVE:
                    return [moveUnit()];  
                case commandList.PLACE:

                    // TODO: Put below in helper function
                    // BEGIN
                    if (!commandArguments) {
                        console.log(invalidArguments);
                        return [];
                    }
            
                    if (!robot.table) {
                        console.log(unassignedBoard);
                        return [];
                    }

                    let [x,y,f] = commandArguments.split(',');   
                    
                    // If not all args entered, throw invalid arg error
                    if (!y || !f) {
                        console.log(invalidArguments);;
                        return [];
                    }
                    // END

                    return [placeUnit({ 'x': x, 
                                        'y': y, 
                                        'direction': f, 
                                        'xMax': robot.getTable().getX(), 
                                        'yMax': robot.getTable().getY()
                                      })];
                case commandList.READ:
                    if (!commandArguments) {
                        console.log(invalidArguments);
                        return [];
                    }
                    let files = commandArguments.split(',');
                    files.map(file => {
                        handleReadCommand(file).map(
                            command => ( robot.handleCommand(command))
                        )
                    })
                    return [];
                default:
                    console.log(invalidCommand,':', commandType);
                    return [];                                       
            }    
}

exports.handleCommand = handleCommand;
/************************************************************
* Purpose: Parses user input to invoke appropriate commands
*************************************************************/

import { placeUnit, moveUnit, rotateUnit, reportUnit } from '../store/storeReducer';
import { invalidCommand } from '../constants/errorMessages';
import { handleReadCommand } from './helper'; 
import { isValidPlaceArgs, isRobotOnTable, hasArgs } from "../validations/validations"
import commandList from "../constants/commandList";

const handleCommand = (input, robot) => {

    const command = input.toUpperCase().trim();
    const [commandType, commandArgs] = command.split(' ');    

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
                    
                    if (! isValidPlaceArgs(commandArgs)) return [];
                    if (!isRobotOnTable(robot)) return [];

                    let [x,y,f] = commandArgs.split(',');  

                    return [placeUnit({ 'x': x, 
                                        'y': y, 
                                        'direction': f, 
                                        'xMax': robot.getTable().getX(), 
                                        'yMax': robot.getTable().getY()
                                      })];
                case commandList.READ:

                    if (!hasArgs(commandArgs)) return [];

                    let files = commandArgs.split(',');
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
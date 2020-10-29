/*************************************
* Purpose: Helper function for parser
**************************************/

import { invalidCommand, invalidFileExt, fileNotFound } from '../constants/errorMessages';
import commandList from "../constants/commandList";
import fs from 'fs';

export const isFileTypeTxt = (path) => {
    const fileType = path.substr(path.lastIndexOf('.')).toLowerCase();
    
	if (fileType !== '.txt'){ 
		console.log(invalidFileExt);
		return false;
	} else {
		return true;
	}
}

export const handleReadCommand = (path) => {

	if (!isFileTypeTxt(path)) {
		return [];
    }
    
	try {
		return fs.readFileSync(path, 'utf8').split('\n');
	} catch(err) {
		if (err.code === 'ENOENT') {
            console.log(fileNotFound);
		} else {
			console.log(err);
		}
		return [];
    }
    
}

/*
// TODO: To remove?
export const handleCommand = (input, robot) => {

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
*/
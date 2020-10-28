// Helper function for robot.js
import { placeUnit, moveUnit, rotateUnit, reportUnit, readFile } from '../store/commands';
import { invalidCommand, invalidArguments, invalidFileExt, fileNotFound, unassignedBoard } from '../constants/errorMessages';
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


export const handleCommand = (input, robot) => {

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

                    if (!commandArguments) {
                        console.log(invalidArguments);
                        return [];
                    }
            
                    if (!robot.table) {
                        console.log(unassignedBoard);
                        return [];
                    }

                    let [x,y,f] = commandArguments.split(',');     
                    return [placeUnit({ 'x': x, 
                                        'y': y, 
                                        'direction': f, 
                                        'xLength': robot.table.xLength, 
                                        'yLength': robot.table.yLength
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
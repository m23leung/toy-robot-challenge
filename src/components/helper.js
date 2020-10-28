// Helper function
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

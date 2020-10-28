/*
* This is the table with dimensions width x height for robot to walk on.
*/

export default class table {

    constructor(length, width) {
      this.xMin = 0;
      this.xMax = length - 1;
      this.yMin = 0;
      this.yMax = width - 1;
    }
  
    changeSize(length, width) {
      this.xMax = length - 1;
      this.yMax = width -  1;
    }

    getX() {
        return this.xMax;
    }

    getY() {
        return this.yMax;
    }

/*
    getBoundaries() {
      return {
        xMin: 0,
        xMax: this.xMax,
        yMin: 0,
        yMax: this.yMax
      }
    }
*/    
  }
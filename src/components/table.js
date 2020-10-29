/**************************************************************************
* Purpose: Table class - for the robot to walk on
***************************************************************************/

export default class table {

    constructor(length, width) {
      this.xMin = 0;
      this.xMax = length - 1;
      this.yMin = 0;
      this.yMax = width - 1;
    }
  
    /**
    * Changes the table size based on provided input
    * @param  length
    * @param  width
    */           
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

  }
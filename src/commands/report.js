export const report = (state, action) => {
    const { x, y, direction } = state;   
    console.log(`ROBOT LOCATION (x,y,direction) - (${x},${y}) ${direction} Direction`);      
}
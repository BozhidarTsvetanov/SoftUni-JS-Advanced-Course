function circleArea(input) {
    let theType = typeof input

    if (theType === 'number') {
        let area = Math.PI * input * input
        console.log(area.toFixed(2));
        
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${theType}.`);
        
    }
}
circleArea(5)

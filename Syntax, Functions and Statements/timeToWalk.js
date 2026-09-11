   function timeToWalk(numOfSteps, lengthOfFootprint, speedInKm) {

    let distance = numOfSteps * lengthOfFootprint;
    let speedInM = speedInKm / 3.6;
    let timeInSeconds = Math.round(distance / speedInM);
    let distanceToTakeFrom = distance;

    while (distanceToTakeFrom >= 500) {
        distanceToTakeFrom -= 500;
        timeInSeconds += 60;
    }

    let timeInHours = Math.floor(timeInSeconds / 3600);
    let remainingSeconds = timeInSeconds % 3600;

    let timeInMinutes = Math.floor(remainingSeconds / 60);
    let seconds = Math.floor(remainingSeconds % 60);

    console.log(`${String(timeInHours).padStart(2, '0')}:${String(timeInMinutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);

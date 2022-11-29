// Code your solution in this file!
// const returnFirstTwoDrivers = function(Antonia, Nuru, Amari, Mo){
   //  return arr.slice(0, 2);
// }

const returnFirstTwoDrivers = (arr) => {
    const firstTwoDrivers = arr.slice(0, 2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = (arr) => {
    const lastTwoDrivers = arr.slice(-2);
    return lastTwoDrivers;
}

const createFareMultiplier = (multiplier) => {
    // const fare = fare * multiplier;
    // return fare
    return (fare) => {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (drivers, selectDrivers) => {
    if(selectDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if(selectDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}

// const selectDifferentDrivers = {returnFirstTwoDrivers, returnLastTwoDrivers};
const selectingDrivers = {returnFirstTwoDrivers, returnLastTwoDrivers};
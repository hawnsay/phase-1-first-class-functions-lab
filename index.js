const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function fareMultiplier (createFareMultiplier) {
        return createFareMultiplier * number;
    }
}

function fareDoubler(number) {
    return number * 2;
}

function fareTripler(number) {
    return number * 3;
}

function selectDifferentDrivers(drivers, functionName) {
    if (functionName === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    if (functionName === returnLastTwoDrivers ) {
        return returnLastTwoDrivers(drivers);
    }
}
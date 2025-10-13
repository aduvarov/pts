"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res = logMiddleware('10');
function getSplitedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
getSplitedHalf([1, 3, 4]);
const split = getSplitedHalf;
const split2 = getSplitedHalf;
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 1,
    },
};
const logLine2 = {
    timeStamp: new Date(),
    data: {
        a: 1,
    },
};

"use strict";
class Vehicle {
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCV extends Vehicle {
}
const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
function logId(id, additionalData) {
    console.log(id);
    return { id, data: additionalData };
}
const res = logId(5, false);

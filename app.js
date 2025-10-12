"use strict";
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0);
    }
    set model(m) {
        this._model = m;
    }
    get model() {
        return this._model;
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_Vehicle_price = new WeakMap();
class EuroTruck extends Vehicle {
    setRun(km) {
        this.run = km / 0.62;
    }
}
new Vehicle().make = 'd';

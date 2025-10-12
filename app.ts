class Vehicle {
    public make: string
    private damages: string[]
    private _model: string
    protected run: number
    #price: number

    set model(m: string) {
        this._model = m
    }

    get model() {
        return this._model
    }

    addDamage(damage: string) {
        this.damages.push(damage)
    }

    isPriceEqual(v: Vehicle) {
        return this.#price === v.#price
    }
}

class EuroTruck extends Vehicle {
    setRun(km: number) {
        this.run = km / 0.62
    }
}

new Vehicle().make = 'd'

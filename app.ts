interface ILogger {
    log(...args): void
    error(...args): void
}

class Logger implements ILogger {
    log(...args: any[]): void {
        console.log(...args)
    }
    async error(...args: any[]): Promise<void> {
        // Кинуть во внешнюю систему
        console.log(...args)
    }
}

interface IPayble {
    pay(payemntId: number): void
    price?: number
}

interface IDeletable {
    delete(): void
}

class User implements IPayble, IDeletable {
    delete(): void {
        throw new Error('Method not implemented.')
    }
    pay(payemntId: number): void {
        ///
    }
    price?: number | undefined
}

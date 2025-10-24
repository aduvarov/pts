import { IStreamLogger } from '../../core/handlers/stream-logger-interface'

export class ConsoleLogger implements IStreamLogger {
    private static logger: ConsoleLogger

    log(...args: any[]): void {
        console.log(...args)
    }
    error(...args: any[]): void {
        console.error(...args)
    }
    end(): void {
        console.log('done')
    }
    public static getInstance() {
        if (!ConsoleLogger.logger) {
            this.logger = new ConsoleLogger()
        }
        return ConsoleLogger.logger
    }
}

abstract class Logger {
    abstract log(message: string): void

    printDate(date: Date): void {
        this.log(date.toLocaleDateString())
    }
}

class MyLogger extends Logger {
    log(message: string): void {
        console.log(message)
    }

    logWithDate(message: string): void {
        this.printDate(new Date())
        this.log(message)
    }
}

const clg = new MyLogger()

clg.log('Hello Wolrd!')
clg.logWithDate('Hello Wolrd!')

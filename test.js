"use strict";
class Logger {
    printDate(date) {
        this.log(date.toLocaleDateString());
    }
}
class MyLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const clg = new MyLogger();
clg.log('Hello Wolrd!');
clg.logWithDate('Hello Wolrd!');

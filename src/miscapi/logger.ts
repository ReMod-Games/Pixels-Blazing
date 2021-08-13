export const fs = require('fs')

export enum LogType {
    INFO 	= "INFO",
	WARN 	= "WARN",
	ERROR 	= "ERROR",
	FATAL 	= "FATAL"
}

export class Logger {
    logConsoleOnly(type: LogType, log: String) {
        console.log(`[${type}]: ${log}`)
    }
    logFileOnly(type: LogType, log: String) {
        fs.writeFile("./Log.txt", `[${type}]: ${log}`, function(err) {
            if(err) {
                return console.log(err)
            }
        })
    }
    logAll(type: LogType, log: String) {
        console.log(`[${type}]: ${log}`)
        fs.writeFile("./Log.txt", `[${type}]: ${log}`, function(err) {
            if(err) {
                return console.log(err)
            }
        })
    }
}
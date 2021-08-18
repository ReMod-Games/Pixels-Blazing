export const fs = require('fs')

export enum LogType {
    INFO 	= "INFO",
	WARN 	= "WARN",
	ERROR 	= "ERROR",
	FATAL 	= "FATAL"
}
export class Logger {
    localTime: String = new Date().getTime().toString()
    localWritePath = `${__dirname}/logs/log_${this.localTime}.txt`

    init() {
        let dir: String = __dirname + '/logs';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir)
        }      
    }

    logConsoleOnly(type: LogType, log: String) {
        console.log(`[${type}]: ${log}`)
    }
    logFileOnly(type: LogType, log: String) {
        fs.writeFile(this.localWritePath, `[${type}]: ${log}`, function(err) {
            if(err) {
                return console.log(err)
            }
        })
    }
    logAll(type: LogType, log: String) {
        console.log(`[${type}]: ${log}`)
        fs.writeFile(this.localWritePath, `[${type}]: ${log}`, function(err) {
            if(err) {
                return console.log(err)
            }
        })
    }
}
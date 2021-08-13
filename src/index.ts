import {Logger , LogType} from "./miscapi/Logger"

if (window == undefined) {
    let window = global
}
const logger = new Logger()
logger.logAll((LogType.INFO), "TEST LOG PLS WORK")
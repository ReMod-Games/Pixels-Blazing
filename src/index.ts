import {Logger , LogType} from "./miscapi/logger"
// let window = global
const logger = new Logger()
logger.init()
logger.logAll((LogType.INFO), "TEST LOG PLS WORK")
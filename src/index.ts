import {Logger , LogType} from "./miscapi/Logger"

const logger = new Logger()
logger.init()
logger.logAll((LogType.INFO), "TEST LOG PLS WORK")
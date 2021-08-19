import { Logger, LogType } from "./miscapi/logger";
import * as BABYLON from "babylonjs"
import { createScene } from "./scenes/SceneManager"

const VLogger: Logger = new Logger()
VLogger.init()
const PixelsBlazingEngine: BABYLON.Engine = new BABYLON.Engine(document.getElementById('game') as HTMLCanvasElement, false)
VLogger.logAll(LogType.INFO, "Engine Initialized!")
const MainScene = createScene(PixelsBlazingEngine)
VLogger.logAll(LogType.INFO, "Main Scene Loaded.")
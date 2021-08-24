import * as BABYLON from "babylonjs"
import { createScene } from "./scenes/SceneManager"

const mainEngine: BABYLON.Engine = new BABYLON.Engine(document.getElementById("game") as HTMLCanvasElement)
const sceneTest = createScene(mainEngine)
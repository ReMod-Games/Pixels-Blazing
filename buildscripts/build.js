// node_modules/rollup/dist/bin/rollup --config rollup.config.dev.js
const { exec } = require("child_process")
// your path to rollup

exec(`rollup --config rollup.config.dist.js`, (error, stdout, stderr) => {
    if (error) {
        console.log(`${error.message}`)
        return
    }
    if (stderr) {
        console.log(`${stderr}`)
        return
    }
    console.log(`${stdout}`)
})
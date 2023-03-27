const { exec } = require("child_process");
const gpioLibPath = "/usr/bin/gpiolib"
// /usr/bin/gpiolib -r pinNum
function executeReadGPIOlib(pinNum){
    const result = '';
    const libFullCall = gpioLibPath+" -r "+pinNum
    exec(libFullCall, 
    (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        result = stdout
    })
    return result
}

// /usr/bin/gpiolib -w pinNum state
function executeWriteGPIOlib(pinNum, state){
    const result = '';
    const libFullCall = gpioLibPath+" -w "+pinNum+" "+state
    exec(libFullCall,
    (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        result = stdout
    })
    return result
}

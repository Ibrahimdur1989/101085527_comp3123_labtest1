
// Q3: make logs folder and add 

const fs = require('fs')
const path = require('path')

const logsDir = path.join(__dirname, 'Logs')

// if not exist make folder
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir)
}

process.chdir(logsDir)

// make 10 files 
for (let i = 1; i <= 10; i++){
    const fileName = `log${i}.txt`
    fs.writeFileSync(fileName, `This is log file # ${i}`)
    console.log(`Created: ${fileName}`)
}
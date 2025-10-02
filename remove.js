
// Q3: delete all log files and folder

const fs = require('fs')
const path = require('path')

const logsDir = path.join(__dirname, 'Logs')

if(fs.existsSync(logsDir)) {
    fs.readdirSync(logsDir).forEach(file => {
        console.log(`Deleting: ${file}`)
        fs.unlinkSync(path.join(logsDir, file))
    })
    fs.rmdirSync(logsDir)
    console.log('Logs folder removed')
} else{
    console.log('No Logs Folder')
}
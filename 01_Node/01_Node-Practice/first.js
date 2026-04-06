// const fs = require('fs');                                         // 'require' use to import module --- fs=File System
const {log, warn} = require('console')
const os = require('os')
                                                                   // REPL (Read-Eval-Print Loop)
// fs.writeFileSync('myFile.txt', 'my name is file')
// fs.writeFileSync('myNewFile.txt', 'my name is file')

console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
log('custom log');
warn('custom log');

const { log } = require('console');
const fs = require('fs');

const contentToWrite = 'Hello, there my name is Pritam chauhan'

fs.writeFile('4-write-to-file.md',contentToWrite,"utf-8",function(err){
    if(err){
        console.log(`Error has occured while writing to the file ${err.message}`)
        return;
    }

    console.log('Content has been written to the file');
})

for (let index = 0; index < 100000000000; index++) {
    
}
const fs = require('fs');

fs.readFile('fileToreadAndWrite.txt','utf-8',(err, data)=>{
  if(err){
    console.log(`An error has occured : ${err.message}`);
    return;
  }


  const newContentWithoutWhiteSpace = data.replace(/\s+/g, ' ');

  fs.writeFile('fileToreadAndWrite.txt',newContentWithoutWhiteSpace,'utf-8',(err)=>{
    if(err){
        console.log(`An error has occured : ${err.message}`);
        return;
    }
    console.log('New content without white spaces has been written');
  })
})
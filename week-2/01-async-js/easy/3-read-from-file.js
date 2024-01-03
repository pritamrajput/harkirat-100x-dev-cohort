const fs = require("fs");

fs.readFile("3-read-from-file.md",'utf-8',function (err,data) {
  if(err){
    console.log(`Error occured while reading from the file : ${err.message}`)
    return;
  }

  console.log('The data of the file is :')
  console.log(data);
})

// for (let index = 0; index <10000000; index++) {
    
// }
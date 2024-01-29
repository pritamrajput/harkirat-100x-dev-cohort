const express = require("express");
const app = express();
const port = 3000;

function sum(n){
    let ans = 0;
    for (let index = 1; index <= n; index++) {
        ans+=index;
    }
    return ans;
}

app.get('/', function(req, res){
   const n = req.query.n;
   const ans = sum(n);
   res.send(`Hi there, sum is ${ans}`);
})

app.listen(port, function(){
    console.log(`server is running on http://localhost:${port}`);
})
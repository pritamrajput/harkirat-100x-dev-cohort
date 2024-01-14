// const express = require('express');
// const app = express();
// const port = 3000;

// // Define route
// app.get('/',(req, res)=>{
//     res.send("Hello world");
// });

// // Knowing request method
// app.get('/example',(req, res)=>{
//     console.log(req.method);
// })

// // Accessing query parameter
// app.get('/greet',(req, res)=>{
//     const name = req.query.name || 'Guest';
//     console.log(name);
//     res.send(`Hello, ${name}`)
// })

// // Accessing route parameters
// app.get('/user/:userId',(req, res)=>{
//    const userId = req.params.userId;
//    res.send(`user Id : ${userId}`);
// })


// //start the server
// app.listen(port,()=>{
//     console.log(`Server is running at http://localhost:${port}`);
// })


const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res){ 
   res.send('Hello! world');
});

app.listen(port,function(){
    console.log(`The server is running at port ${port}`);
});
const express = require('express');
const { use } = require('./todoServer');
const app = express();
const port = 3000;

const users = [{
    name: "john",
    kidneys:[{
        healthy: false,
    },{
        healthy: true,
    }]
}];

app.use(express.json());

app.get("/", function(req, res){
   const johnKidneys = users[0].kidneys;
   const numberOfJohnKidneys = johnKidneys.length;
//    let numberOfHealthyKidneys = 0;
//    for (let i = 0; i < numberOfJohnKidneys; i++) {
//     if(johnKidneys[i].healthy){
//         numberOfHealthyKidneys+=1;
//     }
//    }

const numberOfHealthyKidneysFiltered = johnKidneys.filter(kidneys => kidneys.healthy == true);
const numberOfHealthyKidneys = numberOfHealthyKidneysFiltered.length;

const numberOfUnhealthyKidneys = numberOfJohnKidneys - numberOfHealthyKidneys;
   res.json({
    numberOfJohnKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
   })
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy,
    })

    res.json({msg:'DONE!'});
})

// updating all kidneys as healthy
app.put("/", function(req, res){
    if(atleastOneUnhealthyKidney()){
        for(let i = 0; i < users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({'message':"Upadted!"});
    }
    else{
        res.status(411).json({msg:"All kidneys are healthy no need to update"});
    }
    
})

// removing all unhealthy kidneys
app.delete('/', function(req, res){
    if(atleastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i = 0; i<users[0].kidneys.length;i++){
           if(users[0].kidneys[i].healthy){
             newKidneys.push({
                 healthy:true
             })
           }
        }
     
        users[0].kidneys = newKidneys;
        res.json({msg:"unhealthy kidneys removed"});
    }
    else{
        res.status(411).json({msg:"NO unhealthy kidneys found"});
    }
    
})


// check if there are unhealthy kidneys or not
function atleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(port, function(){
    console.log(`Server is running at http://localhost:${port}`);
})
let count = 0;

function counterApp(duration){

    console.log(count++);
     setTimeout(()=>{
        counterApp(1000);   
     },duration)

}

counterApp(1000);
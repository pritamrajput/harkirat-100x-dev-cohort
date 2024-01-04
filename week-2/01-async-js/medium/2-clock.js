function startClock(){
  const now =  new Date();
  const seconds = now.getSeconds();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';

  return {
    hhmmss: `${hours} :: ${minutes} :: ${seconds}`,
    hhmmssampm: `${hours} :: ${minutes} :: ${seconds} ${period}`, 
  }
}

setInterval(()=>{
    console.clear();
    const currentTime = startClock();
    console.log(currentTime.hhmmss);
    console.log(currentTime.hhmmssampm);
},1000);
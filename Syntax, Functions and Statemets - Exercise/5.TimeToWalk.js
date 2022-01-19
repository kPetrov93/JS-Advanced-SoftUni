function calculateTime(steps,length,speedKmH){
    let distance = steps * length;
    let speed = speedKmH*1000/3600;
    let rest = Math.floor(distance/500);
    let totalTime = distance/speed;
    totalTime+=rest*60;

    let hours=Math.floor(totalTime/3600).toFixed(0).padStart(2,'0');
    let minutes = Math.floor(totalTime/60).toFixed(0).padStart(2,'0');
    let seconds = (totalTime%60).toFixed(0).padStart(2,'0');

    console.log(`${hours}:${minutes}:${seconds}`);
}
calculateTime(4000, 0.60, 5);

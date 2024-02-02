const repeatedFunction = ()=>{
    console.log('Repeated function executed!');
};
const intervalID=setInterval(repeatedFunction,1000);

//In case you want it to stop after some time

//function to be executed at intervals
function repeatedFunction(){
    console.log('Executing repeated function...');
}
//Set an interval (execute repeatedFunction every 1000 milliseconds)
const intervalID=setInterval(repeatedFunction,1000);
//After some time (e.g., 5000 milliseconds), stop the interval
setTimeout(() => {
    clearInterval(intervalId); //Stop the interval
    console.log('Interval stopped .');
}, 5000 );

/**
* Can Santa save Christmas?
*
* Oh no! Santa's little elves are sick this year. He has to distribute the 
* presents on his own. 
* But he has only 24 hours left. Can he do it?
* Your job is to determine if Santa can distribute all the presents in 24 
* hours. 
*
* Your Task:
* 
* You will get an array as input with time durations as string in the * following format: 
* "hh:mm:ss"
* 
* Return true or false whether he can do it or not. 
*
* This kata is part of the Collection "Date fundamentals":
* 
* #1 Count the Days!
* #2 Minutes to Midnight
* #3 Can Santa save Christmas?
*
*/

function determineTime(durations){
  let secondsIn24Hours = 24 * 60 * 60;
  let totalDurationInSeconds = getTotalDurInSec(durations);
  return totalDurationInSeconds <= secondsIn24Hours;
}

function getTotalDurInSec(durations){
  return durations.reduce( (totalDurInSec, currentDuration) => {
    return totalDurInSec + getSingleDurInSec(currentDuration);
  }, 0);
}

function getSingleDurInSec(singleDuration){
  return singleDuration.split(':').reduce( (durInSec, timeBlock, i) => {
    switch(i) {
      case 0: return  durInSec + parseInt(timeBlock) * 3600;
      case 1: return  durInSec + parseInt(timeBlock) * 60;
      case 2: return  durInSec + parseInt(timeBlock);
    }}, 0)
}
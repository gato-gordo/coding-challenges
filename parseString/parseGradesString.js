/*

Automated Grading
A teacher needs your help grading her class of students. Given a report of all student grades, return both the class average and the average of each student.

NOTE: Round any calculations to the nearest 2 decimal places.

Examples
Input Output
report:
"Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18" { "all": 15.93, "Jon": 15.8, "Jeremy": 13.4, "Jesse": 18.6 }

*/

function autograde (report) {
  var grades = {};
  
  //calculate individual averages
  report.split('\n').forEach(function(student){
      student = student.split(' ');
      var name = student[0];
      var scores = student.slice(1);
      var average =  scores.reduce(function(sum, score){
          return Number(sum) + Number(score);
      }) / scores.length;
      grades[name] = Number(average.toFixed(2));
    });
  
  //calculate overall average
  var runningTotal = 0, numGrades = 0;
  for(var student in grades){
    numGrades++;
    runningTotal += grades[student];
  }
  grades.all = Number((runningTotal / numGrades).toFixed(2));
  
  return grades;
}
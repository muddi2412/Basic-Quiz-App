// var totalquestion = [question1, question2, question3];
var score = 0;

function result() {
    var question1 = document.getElementById("q1-ans");
    var question2 = document.getElementById("q2-ans");
    var question3 = document.getElementById("q3-ans");

    if (question1.checked == true) {
        score++
        alert('Question 1 is correct');
    } else {
        alert('Question 1 is Wrong');
    }
    if (question2.checked == true) {
        score++
        alert('Question 2 is correct');
    } else {
        alert('Question 2 is Wrong');
    }

    if (question3.checked == true) {
        score++
        alert('Question 3 is correct');
    } else {
        alert('Question 3 is Wrong');
    }

    alert(score + " out of 3");
    score = 0;
}
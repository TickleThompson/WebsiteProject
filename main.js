// Quiz

// HTML variables
let feedback1 = document.getElementById("feedback-1");
let feedback2 = document.getElementById("feedback-2");
let feedback3 = document.getElementById("feedback-3");
let feedback4 = document.getElementById("feedback-4");
let answer1 = document.getElementById("Ans-1");
let answer2 = document.getElementById("Ans-2");
let answer3 = document.getElementById("Ans-3");
let answer4 = document.getElementById("Ans-4");
let encouragement = document.getElementById("encouragement");
let markscore = document.getElementById("markscore");
let percentage = document.getElementById("percentage");

// Score button event listener
document.getElementById("score-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Variables for feedback on questions
  let ans1 = document.getElementById("Ans-1").value.toLowerCase();

  let ans2 = document.getElementById("Ans-2").value.toLowerCase();

  let ans3 = document.getElementById("Ans-3").value.toLowerCase();

  let ans4 = document.getElementById("Ans-4").value.toLowerCase();

  // Quiz score variable

  let score = 0;

  let blank = 0;

  // Feedback for questions
  if (ans1 === "6" || ans1 === "six") {
    feedback1.innerHTML = `Correct`;
    feedback1.className = "AnsCorrect";
    answer1.className = "InputCorrect";
    score = score + 1;
  } else if (ans1.length === 0) {
    feedback1.innerHTML = `Incomplete`;
    feedback1.className = "AnsIncomplete";
    answer1.className = "InputIncomplete";
    blank = blank + 1;
  } else {
    feedback1.innerHTML = `Incorrect`;
    feedback1.className = "AnsIncorrect";
    answer1.className = "InputIncorrect";
  }

  if (ans2 === "libero") {
    feedback2.innerHTML = `Correct`;
    feedback2.className = "AnsCorrect";
    answer2.className = "InputCorrect";
    score = score + 1;
  } else if (ans2.length === 0) {
    feedback2.innerHTML = `Incomplete`;
    feedback2.className = "AnsIncomplete";
    answer2.className = "InputIncomplete";
    blank = blank + 1;
  } else {
    feedback2.innerHTML = `Incorrect`;
    feedback2.className = "AnsIncorrect";
    answer2.className = "InputIncorrect";
  }

  if (ans3 === "outside hitter" || ans3 === "leftside hitter") {
    feedback3.innerHTML = `Correct`;
    feedback3.className = "AnsCorrect";
    answer3.className = "InputCorrect";
    score = score + 1;
  } else if (ans3.length === 0) {
    feedback3.innerHTML = `Incomplete`;
    feedback3.className = "AnsIncomplete";
    answer3.className = "InputIncomplete";
    blank = blank + 1;
  } else {
    feedback3.innerHTML = `Incorrect`;
    feedback3.className = "AnsIncorrect";
    answer3.className = "InputIncorrect";
  }

  if (ans4 === "middle blocker") {
    feedback4.innerHTML = `Correct`;
    feedback4.className = "AnsCorrect";
    answer4.className = "InputCorrect";
    score = score + 1;
  } else if (ans4.length === 0) {
    feedback4.innerHTML = `Incomplete`;
    feedback4.className = "AnsIncomplete";
    answer4.className = "InputIncomplete";
    blank = blank + 1;
  } else {
    feedback4.innerHTML = `Incorrect`;
    feedback4.className = "AnsIncorrect";
    answer4.className = "InputIncorrect";
  }

  // percentage calculator

  let percentage = (score / 4) * 100;

  percentage.innerHTML = `(${percentage})%`;

  // Quiz marks

  if (score === 0) {
    encouragement.innerHTML = `Need More Practice!`;
    markscore.innerHTML = `0/4`;
  } else if (score === 1) {
    encouragement.innerHTML = `Try Harder!`;
    markscore.innerHTML = `1/4`;
  } else if (score === 2) {
    encouragement.innerHTML = `Half Way!`;
    markscore.innerHTML = `2/4`;
  } else if (score === 3) {
    encouragement.innerHTML = `Almost There!`;
    markscore.innerHTML = `3/4`;
  } else if (score === 4) {
    encouragement.innerHTML = `Nice Job!`;
    markscore.innerHTML = `4/4`;
  }

  // Quiz Marks if Incomplete

  if (blank === 1 || blank === 2 || blank === 3 || blank === 4) {
    encouragement.innerHTML = `Please complete quiz for a score.`;
    markscore.innerHTML = ``;
    percentage.innerHTML = ``;
  }
}

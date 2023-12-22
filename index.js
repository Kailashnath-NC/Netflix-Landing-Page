// const questionList = document.querySelectorAll(".question-section");
// const answerList = document.querySelectorAll(".answer-section");
// // console.log(questionList);
// // console.log(answerList);

// function closeAllAnswers() {
//   answerList.forEach((answer) => {
//     answer.classList.remove("open");
//   });
// }

// questionList.forEach((question, index) => {
//   //   console.log(question);
//   //   console.log(index);
//   question.addEventListener("click", function () {
//     console.log(question.classList);
//     if (answerList[index].classList.contains("open")) {
//       answerList[index].classList.remove("open");
//     } else {
//       closeAllAnswers();
//       answerList[index].classList.add("open");
//     }
//   });
// });

const questionList = document.querySelectorAll(".question-section");
const answerList = document.querySelectorAll(".answer-section");

function closeAllAnswers() {
  answerList.forEach((answer) => {
    answer.style.maxHeight = null;
  });
}

questionList.forEach((question) =>
  question.addEventListener("click", function () {
    const answer = question.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      closeAllAnswers();
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  })
);

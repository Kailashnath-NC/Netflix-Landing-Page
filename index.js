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
  answerList.forEach((answer, index) => {
    answer.style.maxHeight = null;
    questionList[index].lastElementChild.style.transform = null;
  });
}

questionList.forEach((question) =>
  question.addEventListener("click", function () {
    const answer = question.nextElementSibling;
    const plusIcon = question.lastElementChild;
    console.log(plusIcon.style.transform);
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      plusIcon.style.transform = null;
    } else {
      closeAllAnswers();
      answer.style.maxHeight = answer.scrollHeight + "px";
      plusIcon.style.transform = "rotate(45deg)";
    }
  })
);

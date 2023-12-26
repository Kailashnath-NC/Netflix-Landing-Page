// For the FAQ's opening effect
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

// For handling buttons
const allBtns = document.querySelectorAll(".btn");

allBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const messages = [
      "Oops! The magic behind these buttons is just an illusion.",
      "Sorry, these buttons are on strike today!",
      "Looks like you found the mystery buttons! Spoiler: They do nothing.",
      "These buttons were trained by ninjas, but they still won't do anything.",
      "Congratulations! You clicked the button, and nothing happened. Enjoy the show!",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const funMessage = messages[randomIndex];
    e.preventDefault();
    alert(funMessage);
  })
);

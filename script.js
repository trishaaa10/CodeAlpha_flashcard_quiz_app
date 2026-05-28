const question = document.getElementById("question");
const answer = document.getElementById("answer");

const showBtn = document.getElementById("showBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const flashcards = [
  {
    question: "What is HTML?",
    answer: "HTML creates web pages."
  },
  {
    question: "What is CSS?",
    answer: "CSS styles web pages."
  },
  {
    question: "What is JavaScript?",
    answer: "JavaScript adds interactivity."
  }
];

let currentCard = 0;

function loadCard() {
  question.textContent = flashcards[currentCard].question;
  answer.textContent = flashcards[currentCard].answer;

  answer.classList.add("hidden");
}

showBtn.addEventListener("click", () => {
  answer.classList.toggle("hidden");
});

nextBtn.addEventListener("click", () => {
  currentCard++;

  if (currentCard >= flashcards.length) {
    currentCard = 0;
  }

  loadCard();
});

prevBtn.addEventListener("click", () => {
  currentCard--;

  if (currentCard < 0) {
    currentCard = flashcards.length - 1;
  }

  loadCard();
});

loadCard();
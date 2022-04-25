const htmlData = [
  {
    id: 1,
    day: 1,
    category: "html",
    question: "Opening Tag of HTML Tag is called as ________.",
    correct_answer: "Starting Tag",
    incorrect_answer: [
      "Starting Tag",
      "Closed Tag",
      "Enging Tag",
      "Forward Tag",
    ],
  },
  {
    id: 2,
    day: 1,
    category: "html",
    question: "HTML stands for ________.",
    correct_answer: "Hyper Text Markup Language",
    incorrect_answer: [
      "Hyper Text Markup Language",
      "Hyper Text Makeup Language",
      "None of these",
      "Hyper Tech Markup Language",
    ],
  },
  {
    id: 3,
    day: 1,
    category: "html",
    question: "Which of the following is valid colour code ?",
    correct_answer: "#000000;",
    incorrect_answer: ["#000000;", "#00000000;", "#0000000;", "#000000000;"],
  },
  {
    id: 4,
    day: 1,
    category: "html",
    question: "DOM stands for",
    correct_answer: "Document Oriented model",
    incorrect_answer: [
      "Document Oriented model",
      "Document object model",
      "Data object model",
      "Data oriented model",
    ],
  },
  {
    id: 5,
    day: 1,
    category: "html",
    question: "Who was the primary author of HTML?",
    correct_answer: "Tim Berners-Lee",
    incorrect_answer: [
      "Tim Berners-Lee",
      "Brendan Eich",
      "Sabeer Bhatiya",
      "Google Inc.",
    ],
  },
  {
    id: 6,
    day: 1,
    category: "html",
    question:
      "Which of the following attributes comes in handy when borders have to be put between groups of columns instead of every column?",
    correct_answer: "Colgroup",
    incorrect_answer: ["Colgroup", "Col", "Rowspan", "Row"],
  },
  {
    id: 7,
    day: 1,
    category: "html",
    question: "Caption Tag in HTML ?",
    correct_answer: "Both",
    incorrect_answer: [
      "Both",
      " Is used to display the Title for table at the top",
      " Is used to display the Title for table at the bottom",
      "None",
    ],
  },
  {
    id: 8,
    day: 1,
    category: "html",
    question: "Which of the following is used increase the row height?",
    correct_answer: "Row span",
    incorrect_answer: ["Row span", "Cellspacing", "Cellpadding", "Col span"],
  },
  {
    id: 9,
    day: 1,
    category: "html",
    question: "What is mean by DTD ?",
    correct_answer: "Document type definition",
    incorrect_answer: [
      "Document type definition",
      "Document type data",
      "Data type definition",
      "Definition type document",
    ],
  },
  {
    id: 10,
    day: 1,
    category: "html",
    question: "The href attribute in the link tag specifies the:",
    correct_answer: "Destination of a link.",
    incorrect_answer: [
      "Destination of a link.",
      "Link",
      "Hypertext",
      "None of the above",
    ],
  },
  // {
  //   id: 11,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 12,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 13,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 14,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 15,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 16,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 17,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 18,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 19,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 20,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 21,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 22,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 23,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 24,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 25,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 26,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 27,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 28,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 29,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
  // {
  //   id: 30,
  //   day: 1,
  //   category: "html",
  //   question: "",
  //   correct_answer: "",
  //   incorrect_answer: [
  //     "",
  //     "",
  //     "",
  //   ],
  // },
];

const boxBody = document.querySelector(".box-body");
const quizBoxContent = document.querySelector(".quiz-box");
const result = document.querySelector(".quiz-box .result");
const btnAgain = document.querySelector(".quiz-box .result .btn-again");
const quizWrapper = document.querySelector(".quiz-wrapper");

let countQuestion = 1;
let score = 0;

// CREATE LOAD QUIZ
const loadQuiz = () => {
  let ranNums = shuffle([0, 1, 2, 3]);
  let quizBox = htmlData
    .filter((item) => item.id === countQuestion)
    .map((item) => {
      let item1 = item.incorrect_answer[ranNums[0]];
      let item2 = item.incorrect_answer[ranNums[1]];
      let item3 = item.incorrect_answer[ranNums[2]];
      let item4 = item.incorrect_answer[ranNums[3]];
      return `
      <div class="question-title">
        <h2>${item.id}. ${item.question}</h2>
      </div>
      <div class="line"></div>
      <div class="btns">
        <button data-correct="${item1}" class="btn">A. <span">${item1}</span></button>
        <button data-correct="${item2}" class="btn">C. <span">${item2}</span></button>
        <button data-correct="${item3}" class="btn">B. <span">${item3}</span></button>
        <button data-correct="${item4}" class="btn">D. <span">${item4}</span></button>
    </div>`;
    })
    .join("");
  if (countQuestion > htmlData.length) {
    result.style.display = "block";
    quizWrapper.style.display = "none";
    let percent = (score * 100) / htmlData.length;
    let percentPassing = (htmlData.length * 60) / 100;
    const dataLength = document.querySelector(".data-length").innerHTML = htmlData.length;
    const scoreReslut = document.querySelector(".score").innerHTML = score; 
    const percentHTML = document.querySelector(".percent").innerHTML = percent
    const passingPercent = document.querySelector(".passing-percent").innerHTML = percentPassing;
    if (percent > 60) {
      const res = document.querySelector(".res").style.color = "green";
    }
    else{
      const res = document.querySelector(".res").style.color = "red";
    }
  } else {
    boxBody.innerHTML = quizBox;
    const progressQuestion = document.querySelector(".progress-question").innerHTML= countQuestion;
    const progressLength = document.querySelector(".progress-length").innerHTML= htmlData.length;
    result.style.display = "none";
    quizWrapper.style.display = "block";
  }
  loadBnts();
};
loadQuiz();

// Buttons LOAD
function loadBnts() {
  const itemId = document.querySelectorAll(".quiz-box .box-body .btns .btn");
  itemId.forEach((item) => {
    item.addEventListener("click", () => {
      let itemID = item.dataset.correct;
      let answerId = htmlData[countQuestion - 1].incorrect_answer[0];
      if (itemID === answerId) {
        score++;
        countQuestion++;
        loadQuiz();
      } else {
        countQuestion++;
        loadQuiz();
      }
    });
  });
}
// RESTART TEST
btnAgain.addEventListener("click", ()=>{
  countQuestion = 1;
  score = 0;
  loadQuiz();
})

// SHUFFLE RANDOM NUMBER [1, 2, 3, 4]
function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


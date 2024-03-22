// questions and answers
var questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement: "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The letter 'E'"
  }
];

var contentDiv = document.getElementById('content');

// create the function
function showAnswer(index) {
  return function () {
    var button = document.getElementById('button' + index);
    var answerText = document.createElement('p');
    answerText.textContent = questions[index].answer;
    contentDiv.replaceChild(answerText, button);
  };
}

// display questions and buttons
for (var i = 0; i < questions.length; i++) {
  var questionDiv = document.createElement('div');
  questionDiv.classList.add('question');

  var questionText = document.createElement('p');
  questionText.textContent = questions[i].statement;
  questionDiv.appendChild(questionText);

  var button = document.createElement('button');
  button.textContent = 'Show the answer';
  button.id = 'button' + i;
  button.addEventListener('click', showAnswer(i));
  questionDiv.appendChild(button);

  contentDiv.appendChild(questionDiv);
}
function init() {
  newQuestion();
}

init();

var word;

var question, answer;

var last_incorrect = false;

var game = { correct: 0, incorrect: 0, total: 0 };

function newQuestion() {
  word = words[Math.floor(Math.random() * words.length)];

  question = word.latin;
  answer = word.english;

  console.log(`NEW QUESTION: ${question} : ${answer} `);

  document.querySelector("#word").innerHTML = question;
  if(word.part) document.querySelector("#part").innerHTML = '('+word.part+")";

  document.querySelector("#stage").innerHTML = "Stage " + word.stage;
}

document.querySelector("#input").onkeydown = function (e) {
  if (e.key == "Enter" || e.code == "Enter") {
    submit(this);
  }
};

function submit(input) {
  if (answer.includes(input.value) || answer[0] == input.value.split(",")[0]) {
    // correct
    console.log("CORRECT");
    input.value = "";
    if (last_incorrect) {
      last_incorrect = false;
    } else {
      game.correct++;
      game.total++;
    }

    newQuestion();
  } else {
    // incorrect
    console.log("INCORRECT");
    input.value = answer.join(", ");
    last_incorrect = true;
    game.incorrect++;
    game.total++;
    // incorrect.push();
  }

  document.querySelector("#record").innerHTML = `${game.correct} / ${game.total}&nbsp;&nbsp;(${Math.floor(
    (game.correct / game.total) * 100
  )}%)`;
}

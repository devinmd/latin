var word;

var question, answer;

var last_incorrect = false;

var incorrect = {};

var game = { correct: 0, incorrect: 0, total: 0 };

var abbreviations = {
  preposition: "prep.",
  verb: "verb",
  noun: "noun",
  adverb: "adv.",
  adjective: "adj.",
  pronoun: "pro.",
  conjunction: "conj.",
  interjection: "inter.",
  numeral: "num.",

  masculine: "m.",
  feminine: "f.",
  neuter: "n.",
  both: "m. f.",
};

var stages = [];

function init() {
  applySettings();
}

var valid_words = [];

init();

function newQuestion() {
  word = valid_words[Math.floor(Math.random() * valid_words.length)];
  showQuestion();
}

function applySettings() {
  document.querySelector("#settings").style.display = "none";

  game = { correct: 0, incorrect: 0, total: 0 };
  last_incorrect = false;
  stages = [];
  valid_words = [];

  let num = document.querySelector("#stage-input").value;
  if (num > 20) {
    num = 20;
    document.querySelector("#stage-input").value = 20;
  }
  if (document.querySelector("#settings-select").value == "up-to") {
    // up to stage X
    for (let i = 1; i <= num; i++) {
      stages.push(i);
    }
  } else {
    // in stage X
    stages = [num];
  }
  console.log(stages);

  for (i in words) {
    if (!stages.includes(parseInt(words[i].stage))) {
      continue;
    }
    valid_words.push(words[i]);
  }

  document.querySelector("#record").innerHTML = `0 / 0&nbsp;&nbsp;(%)`;

  newQuestion();
}

function showQuestion() {
  question = word.latin;
  answer = word.english;

  console.log(`NEW QUESTION: ${question} : ${answer} `);

  document.querySelector("#word").innerHTML = question;
  if (word.part) document.querySelector("#part").innerHTML = `(${abbreviations[word.part]})`;
  if (word.part && word.gender)
    document.querySelector("#part").innerHTML = `(${abbreviations[word.gender]} ${abbreviations[word.part]})`;

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
    if (!incorrect.question) {
      incorrect[question] = 1;
    } else {
      incorrect[question]++;
    }
  }

  document.querySelector("#record").innerHTML = `${game.correct} / ${game.total}&nbsp;&nbsp;(${Math.floor(
    (game.correct / game.total) * 100
  )}%)`;
}

function toggleSettings() {
  if (document.querySelector("#settings").style.display == "none") {
    document.querySelector("#settings").style.display = "flex";
  } else {
    document.querySelector("#settings").style.display = "none";
  }
}

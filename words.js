function init() {
  for (i in words) {
    let tr = document.createElement("tr");
    tr.className = 'word-row'
    let number = document.createElement("td");
    number.innerHTML = i;
    number.className = 'number'

    let latin = document.createElement("td");
    latin.innerHTML = words[i].latin;
    let english = document.createElement("td");
    english.innerHTML = words[i].english.join(", ").replaceAll("?,", "?");
    let part = document.createElement("td");
    part.innerHTML = words[i].part;
    if(!words[i].part){
      part.innerHTML = '...'
    }
    let stage = document.createElement("td");
    stage.innerHTML = words[i].stage;
    stage.className = 'stage'
    tr.append(number,latin, english, part, stage);
    document.querySelector("#word-list-table").append(tr);
  }
}

init();
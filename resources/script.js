var words = [
  // paste here
];

// sort by stage
// then sort by alphabetical (of latin word)
const w1=words.sort((a, b) => a.stage - b.stage || a.latin.localeCompare(b.latin));

// print
for(i in w1){
  console.log(w1[i])
}

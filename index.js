// add solution here
const theBeatlesPlay = (musicians, instruments) => {
  const arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

const johnLennonFacts = (facts) => {
  let i = 0;
  let arr = [];
  while (facts[i]) {
    arr.push(facts[i] + "!!!");
    i++
  }
  return arr;
}

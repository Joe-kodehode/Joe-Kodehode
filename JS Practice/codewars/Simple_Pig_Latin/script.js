function pigIt(str) {
  let answer = [];
  str.split(" ").map((word, i) => {
    if (word !== "!") {
      answer.push(word.substr(1) + word.substr(0, 1) + "ay");
    } else {
      answer.push(word);
    }
  });
  return answer.join(" ");
}

console.log(pigIt("Pig latin is cool !"));

/*
 */

const hashtagGenerator = (string) => {
  if (string.replaceAll(" ", "") === "") {
    return false;
  }

  const words = string.replace(/\s+/g, " ").trim().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  answer = words.join("");
  if (answer.length > 140) {
    return false;
  } else return "#" + answer;
};

console.log(
  hashtagGenerator(
    "Loooooooooooooooooooooooooooooooooooooooooooo              ooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  )
);

const pigIt = (str) =>
  str.split` `.map((w) => (w !== "!" ? `${w.substr(1)}${w[0]}ay` : w)).join` `;

console.log(pigIt("Pig latin is cool !"));

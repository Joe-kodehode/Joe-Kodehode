// Array holding objects of key value pairs for key & drum type.
const drums = [
  { key: "a", type: "clap" },
  { key: "s", type: "hihat" },
  { key: "d", type: "kick" },
  { key: "f", type: "openhat" },
  { key: "j", type: "ride" },
  { key: "k", type: "snare" },
  { key: "l", type: "tink" },
  { key: "ø", type: "tom" },
];

// forEach to go through the drums array and target the drumtype, listening for the mouse being held down on that class in the CSS and activating playSound function if it is. Also an event listener for the mouse being released so we can remove the "animation" class which was added in the playSound function.
drums.forEach((drum) => {
  document.querySelector(`.${drum.type}`).addEventListener("mousedown", () => {
    playSound(drum);
    document.body.addEventListener("mouseup", () => {
      document.querySelector(`.${drum.type}`).classList.remove("animation");
    });
  });

  // event listener to call playSound function on keypress which matches a key value in the drum object.
  document.body.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === drum.key) playSound(drum);
  });

  // event listener to remove "animation" class from the targeted drum it was previously added to using keyboard.
  document.body.addEventListener("keyup", (e) => {
    if (e.key.toLowerCase() === drum.key)
      document.querySelector(`.${drum.type}`).classList.remove("animation");
  });
});

// Function which is called on keydown & mousedown, creates the audio using the name of the drum and plays it right away. Also targets the drum in css and adds the "animation" class
function playSound(drum) {
  new Audio(`audio/${drum.type}.wav`).play();

  document.querySelector(`.${drum.type}`).classList.add("animation");
}

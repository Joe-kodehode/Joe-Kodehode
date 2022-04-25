const normalFace = document.querySelector(".normal");
const eyesFace = document.querySelector(".eyes");
const mouthFace = document.querySelector(".mouth");
const earsFace = document.querySelector(".ears");
const emoji = document.querySelector(".emoji");

// Adding event listeners for cycling emojis

normalFace.addEventListener("click", () => {
  if (normalFace.classList.contains("normal")) {
    normalFace.classList.remove("active");
    eyesFace.classList.add("active");
  }
});

eyesFace.addEventListener("click", () => {
  if (eyesFace.classList.contains("eyes")) {
    eyesFace.classList.remove("active");
    mouthFace.classList.add("active");
  }
});

mouthFace.addEventListener("click", () => {
  if (mouthFace.classList.contains("mouth")) {
    mouthFace.classList.remove("active");
    earsFace.classList.add("active");
  }
});

earsFace.addEventListener("click", () => {
  if (earsFace.classList.contains("ears")) {
    earsFace.classList.remove("active");
    normalFace.classList.add("active");
  }
});

// Resizing on mouseover by adding/removing "hover" CSS

emoji.addEventListener("mouseenter", () => {
  if (!emoji.classList.contains("hover")) {
    emoji.classList.add("hover");
  }
});

emoji.addEventListener("mouseleave", () => {
  if (emoji.classList.contains("hover")) {
    emoji.classList.remove("hover");
  }
});

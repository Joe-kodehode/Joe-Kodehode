// variable assigned to blur checkbox
let blur = document.querySelector(".blur");

// function to listen for click on blur checkbox, when checked it will enable the blur intensity input. when unchecked it disables blur intensity input
blur.addEventListener("click", () => {
  let blurIntensity = document.querySelector(".blurIntensity");

  blurIntensity.disabled
    ? (blurIntensity.disabled = false)
    : (blurIntensity.disabled = true);
});

// Event listener to register click on new picture button
document.querySelector(".picBtn").addEventListener("click", () => {
  // If there is already an image, it is removed before generating a new one
  if (document.querySelector("#randomImg")) {
    document.querySelector("#randomImg").remove();
  }
  // Assigning variables to user input of width and height
  let width = document.querySelector(".width").value;
  let height = document.querySelector(".height").value;
  // variable to check if monochrome is checked
  let grayscaleActive = document.querySelector(".grayscale").checked
    ? "?grayscale"
    : "";
  // variable to check if blur is checked
  let blurActive = blur.checked ? "?blur" : "";
  // variable to check user input of blur intensity
  let blurValue = document.querySelector(".blurIntensity").value;
  // conditional to check which extras are enabled, 'extras' variable will differ depending on what is enabled
  if (grayscaleActive && blurActive) {
    extras = `/?grayscale&blur=${blurValue}`;
  } else if (grayscaleActive) {
    extras = "/?grayscale";
  } else if (blurActive) {
    extras = `/?blur=${blurValue}`;
  } else {
    extras = "";
  }

  // fetch to get a random picture from the API, with variables for width, height and extras assigned by user. Image is created, assigned ID and src then appended to the body
  fetch(`https://picsum.photos/${width}/${height}${extras}`).then((res) => {
    let img = document.createElement("img");
    img.id = "randomImg";
    img.src = res.url;
    document.querySelector("body").append(img);
  });
});

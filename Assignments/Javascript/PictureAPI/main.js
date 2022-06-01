let blur = document.querySelector(".blur");

blur.addEventListener("click", () => {
  let blurDisabled = document.querySelector(".blurIntensity").disabled;

  blurDisabled
    ? (document.querySelector(".blurIntensity").disabled = false)
    : (document.querySelector(".blurIntensity").disabled = true);
});

document.querySelector(".picBtn").addEventListener("click", () => {
  if (document.querySelector("#randomImg")) {
    document.querySelector("#randomImg").remove();
  }

  let width = document.querySelector(".width").value;
  let height = document.querySelector(".height").value;

  let grayscaleActive = document.querySelector(".grayscale").checked
    ? "?grayscale"
    : "";

  let blurActive = blur.checked ? "?blur" : "";
  let blurValue = document.querySelector(".blurIntensity").value;

  if (grayscaleActive && blurActive) {
    extras = `/?grayscale&blur=${blurValue}`;
  } else if (grayscaleActive) {
    extras = "/?grayscale";
  } else if (blurActive) {
    extras = `/?blur=${blurValue}`;
  } else {
    extras = "";
  }

  fetch(`https://picsum.photos/${width}/${height}${extras}`).then((res) => {
    let img = document.createElement("img");
    img.id = "randomImg";
    img.src = res.url;
    document.querySelector("body").append(img);
  });
});

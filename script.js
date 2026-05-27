function upDate(previewPic) {
  console.log("Event triggered for: " + previewPic.alt);
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.textContent = previewPic.alt;
  imageDiv.setAttribute("aria-label", previewPic.alt);
}

function unDo() {
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";
  imageDiv.setAttribute("aria-label", "Gallery preview area");
}

function addTabIndex() {
  console.log("Page loaded: adding tabindex to gallery images");
  let images = document.querySelectorAll(".gallery img");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}

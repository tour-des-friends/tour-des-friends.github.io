var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
var currentImageIndex = 0; // Track the index of the currently displayed image
const noImages = 73;
var images = []
for (var i = 1; i<noImages +1; i++) {
  var imagename = "images/impressionen/image" + i + ".jpg";
  images.push(imagename) 
}

// Function to update the current image and its index
function updateImage(index) {
  currentImageIndex = index;
  currentImage.src = images[currentImageIndex];
}

function pythonindexing(i) {
  if (i<0) {
    i = noImages+i;
  } else if (i>noImages-1) {
    i = i-noImages;
  } else {
    i = i;
  }
  return i;
}
function updateThumbs() {
  imageThumbs.replaceChildren()
  for (var a = currentImageIndex - 2  ; a < currentImageIndex+3; a++) {
    var thumb = document.createElement("img");
    i = pythonindexing(a);
    thumb.src = images[i];
    thumb.alt = "Image " + (i + 1);
    thumb.classList.add("thumb");
    imageThumbs.appendChild(thumb);

    thumb.addEventListener(
      "click", (function(i) {
        return function() {
          updateImage(i);
          updateThumbs();
        };
      })(i)
    );
  }
}

updateThumbs();

// Implement arrow navigation
arrowLeft.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage(currentImageIndex);
  updateThumbs(currentImageIndex);
});

arrowRight.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage(currentImageIndex);
  updateThumbs(currentImageIndex);
});


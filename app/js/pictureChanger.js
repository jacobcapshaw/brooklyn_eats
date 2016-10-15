window.onload = initialize;

var currentPictureIndex = 0;

function showPicture(index) {
  var links = Array.from(document.querySelectorAll('.imageGallery a'));
  var link = links[index];
  link.parentNode.className = 'active';

  var placeholder = document.getElementById('placeholder');
  var description = document.getElementById('description');

  var source = link.getAttribute('href');
  var titleInfo = (index + 1);
  // var titleInfo = link.getAttribute('title');
  placeholder.setAttribute('src', source);
  description.textContent = titleInfo;
  return false;
}

function initialize() {
  initializeCarouselControls();
  showPicture(0);
  initializeModal();
  closeModal();
}

function initializeCarouselControls() {
  var left = document.querySelector('#moveLeft');
  var right = document.querySelector('#moveRight');
  left.onclick = function(){
    currentPictureIndex--;
    if (currentPictureIndex < 0) {
      currentPictureIndex = 4;
    }
    showPicture(currentPictureIndex);
    return false;
  }

  right.onclick = function() {
    currentPictureIndex++;
    if (currentPictureIndex > 4) {
      currentPictureIndex = 0;
    }
    showPicture(currentPictureIndex);
    return false;
  }

}

function initializeModal() {
  var modal = document.getElementById('modalGallery');
  var img = document.getElementById('placeholder');
  var modalImg = document.getElementById("modalImage");

  img.onclick = function(){
    modal.style.visibility = "visible";
    modalImg.src = img.src;
  }

  modal.onclick = function() {
    modal.style.visibility = "hidden";
  }
}


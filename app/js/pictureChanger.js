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

  showPicture(0);
}


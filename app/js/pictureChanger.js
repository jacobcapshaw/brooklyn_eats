window.onload = initialize;


function inactivateAllLinks() {
  var links = Array.from(document.getElementsByTagName('a'));

  for (var i = 0; i < links.length; i++) {
    var listItem = links[i].parentNode;
    listItem.className = '';
  }
}

function showPicture(link) {
  inactivateAllLinks();
  link.parentNode.className = 'active';

  var placeholder = document.getElementById('placeholder');
  var description = document.getElementById('description');

  var source = link.getAttribute('href');
  var titleInfo = link.getAttribute('title');

  placeholder.setAttribute('src', source);
  description.textContent = titleInfo;
}

function initialize() {
  console.log("initializing")
  var links = Array.from(document.querySelectorAll('.imageGallery a'));

  for (var i = 0; i < links.length; i++) {
    console.log("adding on click")
    links[i].onclick = function() {
      showPicture(this);
      return false;
    }
  }

  showPicture(links[0]);
}

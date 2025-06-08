// Poster images array
const posters = ['poster1.jpg', 'poster2.jpg', 'poster3.jpg'];

// Select DOM elements
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

// Apply styling using JavaScript
popup.style.position = 'fixed';
popup.style.top = '0';
popup.style.left = '0';
popup.style.width = '100vw';
popup.style.height = '100vh';
popup.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
popup.style.display = 'flex';
popup.style.alignItems = 'center';
popup.style.justifyContent = 'center';
popup.style.zIndex = '9999';

popupImg.style.maxWidth = '90%';
popupImg.style.maxHeight = '90%';
popupImg.style.border = '5px solid white';
popupImg.style.borderRadius = '10px';

// Randomly choose a poster
const randomPoster = posters[Math.floor(Math.random() * posters.length)];
popupImg.src = randomPoster;

// Show popup
popup.style.display = 'flex';

// Push state to history
window.history.pushState({popup: true}, "");

// On back button, close popup
window.onpopstate = function(event) {
  if (event.state && event.state.popup) {
    popup.style.display = 'none';
  }
};
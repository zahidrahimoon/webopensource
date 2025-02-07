const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



function initMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuContent = document.querySelector('.menu-content');
  const closeMenu = document.querySelector('.close');
  const overlay = document.querySelector('.overlay');

  // Open the menu
  menuToggle.addEventListener('click', () => {
      menuContent.style.right = '0';
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';
  });

  // Close the menu with close button
  closeMenu.addEventListener('click', () => {
      menuContent.style.right = '-100%';
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
  });

  // Close the menu by clicking the overlay
  overlay.addEventListener('click', () => {
      menuContent.style.right = '-100%';
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
  });
}

// Initialize the menu functionality
initMenu();


function initFaqToggle() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      item.querySelector('.question').addEventListener('click', () => {
          item.classList.toggle('active');
          const icon = item.querySelector('.toggle-icon');
          icon.textContent = item.classList.contains('active') ? '-' : '+';
      });
  });
}

// Initialize the FAQ toggle functionality
initFaqToggle();



function initMap() {
  const location = { lat: 40.7128, lng: -74.0060 }; 
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
  });
  const marker = new google.maps.Marker({
      position: location,
      map: map,
  });
}




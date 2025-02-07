// Function to update the display of the slider value
function updateSliderValue(slider, display) {
  const sliderValue = parseInt(slider.value);
  display.textContent = `\$${sliderValue}`;
}

// Function to filter products based on the slider value
function filterProductsByPrice(slider, products) {
  const sliderValue = parseInt(slider.value);

  products.forEach((product) => {
    const price = parseInt(product.dataset.price);

    if (
      sliderValue > parseInt(slider.min) &&
      sliderValue < parseInt(slider.max)
    ) {
      if (sliderValue >= price) {
        gsap.to(product, { autoAlpha: 1, scale: 1, duration: 0.5 });
      } else {
        gsap.to(product, { autoAlpha: 0, scale: 0.8, duration: 0.5 });
      }
    } else {
      gsap.to(product, { autoAlpha: 1, scale: 1, duration: 0.5 });
    }
  });
}

// Function to filter products and show/hide based on max price
function filterProductsAndDisplay(slider, products) {
  const maxPrice = parseInt(slider.value);

  products.forEach((product) => {
    const price = parseInt(product.getAttribute("data-price"), 10);
    if (price <= maxPrice) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Main function to initialize event listeners
function initPriceSlider() {
  const slider = document.querySelector("#priceSlider");
  const display = document.querySelector("#sliderValue");
  const products = document.querySelectorAll(".product");

  // Update slider value display on input
  slider.oninput = function () {
    updateSliderValue(slider, display);
    filterProductsByPrice(slider, products);
  };

  // Additional filtering based on max price
  slider.addEventListener("input", function () {
    filterProductsAndDisplay(slider, products);
  });
}

// Initialize the price slider functionality
initPriceSlider();

function initializeMenuToggle() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuContent = document.querySelector('.menu-content');
  const closeMenu = document.querySelector('.close');
  const overlay = document.querySelector('.overlay');

  menuToggle.addEventListener('click', () => {
      menuContent.style.right = '0';
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';
  });

  closeMenu.addEventListener('click', () => {
      menuContent.style.right = '-100%';
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
  });

  overlay.addEventListener('click', () => {
      menuContent.style.right = '-100%';
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
  });
}

initializeMenuToggle();

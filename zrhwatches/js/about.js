function initializeTestimonials() {
  const testimonialData = [
    {
      avatar:
        "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
      name: "Simonette Lindermann",
      review:
        "Mind-blowing discovery! Changed my routine. Essential for everyone.",
    },
    {
      avatar:
        "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
      name: "Zahid",
      review:
        "Mind-blowing discovery! Changed my routine. Essential for everyone.",
    },
    {
      avatar:
        "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
      name: "Rahimoon",
      review:
        "Mind-blowing discovery! Changed my routine. Essential for everyone.",
    },
    {
      avatar:
        "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
      name: "Hassaan",
      review:
        "Mind-blowing discovery! Changed my routine. Essential for everyone.",
    },
    // Additional testimonials...
  ];

  const slideHolder = document.querySelector("#slideHolder");
  testimonialData.forEach((testimonial) => {
    slideHolder.innerHTML += `<div class="swiper-slide">
  <div class="ImgHolder">
      <img src="${testimonial.avatar}">
  </div>
  <div class="ContentHolder">
      <h3>${testimonial.name}</h3>
      <p>${testimonial.review}</p>
  </div>
</div>`;
  });

  // Initialize Swiper after adding all slides
  const swiper = new Swiper("#craouselContainer", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      depth: 800,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: { delay: 500 },
  });

  // Update Swiper after window resize to apply correct slidesPerView
  window.onresize = function () {
    queryResizer(swiper);
  };
  queryResizer(swiper);
}

function queryResizer(swiper) {
  if (window.innerWidth < 724) swiper.params.slidesPerView = 2;
  if (window.innerWidth > 501) swiper.params.slidesPerView = 2;
  if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3;
  if (window.innerWidth < 501) swiper.params.slidesPerView = 1;
  swiper.update();
}

// Call the function after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeTestimonials();
});

document.addEventListener("DOMContentLoaded", () => {
  const storyGallery = new Swiper(".story-gallery__slider", {
    loop: true,
    autoplay: {
      delay: 5000, // Adjust the delay as needed
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    navigation: {
      nextEl: ".story-gallery__next",
      prevEl: ".story-gallery__prev",
    },
    pagination: {
      el: ".story-gallery__pagination",
      clickable: true,
    },
    on: {
      slideChange: function (swiper) {
        const descriptions = document.querySelectorAll(".story-gallery__text");
        descriptions.forEach((desc) =>
          desc.classList.remove("swiper-slide-active")
        );
        const activeDesc = document.getElementById(
          `desc-${swiper.realIndex + 1}`
        );
        activeDesc.classList.add("swiper-slide-active");
      },
    },
  });
});

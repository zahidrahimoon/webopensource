AOS.init();
function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locoScroll();

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


function cursor() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.clientX,
      y: dets.clientY,
    });
  });
  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursor();

function productcursor() {
  var productCursor = document.querySelector("#productcursor");

  // Select both #page3 and #page6 and add mousemove listener to both
  document.querySelectorAll("#page3, #page6").forEach(function (page) {
    page.addEventListener("mousemove", function (dets) {
      gsap.to(productCursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.2, // Smooth movement
      });
    });
  });

  // Add the hover effect for .child elements
  document.querySelectorAll(".child").forEach(function (child) {
    child.addEventListener("mouseenter", function () {
      gsap.to(productCursor, {
        scale: 1,
        duration: 0.3,
      });
    });

    child.addEventListener("mouseleave", function () {
      gsap.to(productCursor, {
        scale: 0,
        duration: 0.3,
      });
    });
  });
}
productcursor();

function loadinganimation(){
  gsap.from("#page1 h1", {
    y:100,
    opacity:0,
    delay : .5,
    duration : 0.9,
    stagger : 0.3
  })
}
loadinganimation();

function animateSpans() {
  const spans = document.querySelectorAll("h1 span");
  gsap.timeline().to(spans, {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power4.out",
    stagger: 0.1,
  });
}

animateSpans();

function page2Animation() {
  gsap.from(".elem h1", {
    y: 120,
    stagger: 0.2,
    ScrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      maker: true,
      scrub: 2,
    },
  });
}

page2Animation();

function animatedText(){
  var clutter = '';
  document.querySelector('#page5').textContent.split(" ").forEach(function(dets){
    clutter += `<span>${dets}</span>`;
  });
  
  // Assigning the cluttered HTML to the element outside the loop for better performance
  document.querySelector('#page5>h1').innerHTML = clutter;
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.to('#page5>h1>span', {
    scrollTrigger: {  // Corrected from 'ScrollTrigger' to 'scrollTrigger'
      trigger: '#page5>h1>span',
      start: 'bottom top',
      end: 'top bottom',
      scroller: '#main',
      scrub: 0.5,
      markers: true  // Corrected 'maker' to 'markers' if debugging is needed
    },
    stagger: 0.2,
    color: '#fff'
  });
  }
  animatedText();

function swiper(){
  const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function() {
            gsap.fromTo('.swiper-slide-active img', {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 1});
            gsap.fromTo('.swiper-slide-active .slide-text', {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 1});
        },
        slideChangeTransitionStart: function() {
            gsap.fromTo('.swiper-slide-active img', {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 1});
            gsap.fromTo('.swiper-slide-active .slide-text', {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 1});
        }
    }
});
}
swiper();

function aboutHero() {
document.addEventListener("DOMContentLoaded", function () {
  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#scroll-container"),
      smooth: true
  });

  locoScroll.on("scroll", gsap.update);

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.scrollerProxy("#scroll-container", {
      scrollTop(value) {
          return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
          };
      },
      pinType: document.querySelector("#scroll-container").style.transform
          ? "transform"
          : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
  });

  gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 1
  });

  gsap.from(".hero-image img", {
      scale: 1.1,
      duration: 3,
      ease: "power3.out",
      delay: 0.5
  });
});

}

aboutHero();




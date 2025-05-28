document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, showing loader...");


  setTimeout(() => {
    console.log("Hiding loader, showing content...");

    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";

    document.body.classList.remove("loading");
  }, 500);
});


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navlinks');
  const overlay = document.getElementById('overlay');

  function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
    overlay.classList.toggle('show');
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu); 
});

window.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById("image-wrapper");
  const img = wrapper.querySelector("img");

  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -11; 
    const rotateY = ((x - centerX) / centerX) * 11;  

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  wrapper.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById("image-wrapper1");
  const img = wrapper.querySelector("img");

  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -11; 
    const rotateY = ((x - centerX) / centerX) * 11;  

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  wrapper.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
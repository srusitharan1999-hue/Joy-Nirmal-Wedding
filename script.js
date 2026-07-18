// ===============================
// Joy ❤️ Nirmal Wedding Website
// ===============================

// Hide Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 800);
  }, 1200);
});

// Wedding Countdown
const weddingDate = new Date("August 21, 2026 16:30:00").getTime();

const countdown = setInterval(() => {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  if (distance <= 0) {

    clearInterval(countdown);

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    return;
  }

  document.getElementById("days").innerHTML =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerHTML =
    Math.floor((distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60));

  document.getElementById("minutes").innerHTML =
    Math.floor((distance % (1000 * 60 * 60)) /
      (1000 * 60));

  document.getElementById("seconds").innerHTML =
    Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);

// Fade Animation
const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

});

document.querySelectorAll("section").forEach(section => {

  section.classList.add("fade-up");

  observer.observe(section);

});

// Tạo trái tim bay
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 600);

// Hiệu ứng fade chữ khi scroll
window.addEventListener("scroll", () => {
  const slide1 = document.getElementById("slide1").querySelector("h1");
  let scrollY = window.scrollY;
  let fadeOutPoint = window.innerHeight / 2;
  if (scrollY > fadeOutPoint) {
    slide1.classList.add("hidden");
  } else {
    slide1.classList.remove("hidden");
  }
});

// Step slider logic
const steps = document.querySelectorAll(".step-slider img");
const dots = document.querySelectorAll(".step-dots .dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showStep(index) {
  steps.forEach((s, i) => s.classList.toggle("active", i === index));
  dots.forEach((d, i) => d.classList.toggle("active", i === index));
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % steps.length;
  showStep(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + steps.length) % steps.length;
  showStep(currentIndex);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.dataset.index);
    showStep(currentIndex);
  });
});

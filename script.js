// Background hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart-fly");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.getElementById("hearts")?.appendChild(heart);

  setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 600);

// Fade title khi scroll
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

document.addEventListener("DOMContentLoaded", () => {
  const paragraph = document.getElementById("animatedParagraph");
  const text = paragraph.innerText.trim();
  const words = text.split(" ");
  paragraph.innerHTML = words.map(word => `<span> ${word} </span>`).join(" ");

  const spans = paragraph.querySelectorAll("span");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add("show");
          }, index * 150); // delay mỗi chữ 0.15s
        });
        observer.unobserve(paragraph);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(paragraph);
});


function createEndHeart() {
  const heartsContainer = document.getElementById("hearts-end");
  const heart = document.createElement("span");
  heart.className = "heart-float";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 90 + "%";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createEndHeart, 800); // mỗi 0.8s thả 1 tim
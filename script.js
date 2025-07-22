document.getElementById("login-button").addEventListener("click", () => {
  const pw = document.getElementById("password").value;
  if (pw === "Iloveyou") {
    heartBurstEffect();
    setTimeout(() => {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("main-content").classList.remove("hidden");
      startFloatingHearts();
    }, 800);
  } else {
    alert("Wrong password, try again ❤️");
  }
});

function heartBurstEffect() {
  const container = document.getElementById("heart-burst-container");
  const btn = document.getElementById("login-button");
  const rect = btn.getBoundingClientRect();
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-bg";
    heart.style.left = `${rect.left + rect.width / 2 + (Math.random() - 0.5) * rect.width}px`;
    heart.style.top = `${rect.top + rect.height / 2}px`;
    heart.style.animationDuration = `${6 + Math.random() * 4}s`;
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }
}

function startFloatingHearts() {
  const bg = document.getElementById("floating-hearts-bg");
  for (let i = 0; i < 20; i++) createBgHeart(bg);
}

function createBgHeart(bg) {
  const heart = document.createElement("div");
  heart.className = "heart-bg";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${8 + Math.random() * 4}s`;
  bg.appendChild(heart);
  setTimeout(() => {
    heart.remove();
    createBgHeart(bg);
  }, 12000);
}

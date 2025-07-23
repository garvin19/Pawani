function checkPassword() {
  const input = document.getElementById("password").value;
  const correct = "Iloveyou";
  if (input === correct) {
    triggerHeartBurst();
    setTimeout(() => {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 1000);
  } else {
    alert("That's not the magic word, try again!");
  }
}

function triggerHeartBurst() {
  const container = document.getElementById("heart-burst-container");
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
    heart.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
    container.appendChild(heart);
    setTimeout(() => container.removeChild(heart), 1000);
  }
}

function spawnFloatingHearts() {
  const container = document.getElementById("background-hearts");
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 10 + "s";
    heart.style.opacity = 0.3 + Math.random() * 0.5;
    container.appendChild(heart);
  }
}

window.onload = spawnFloatingHearts;

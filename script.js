const correctPassword = "Iloveyou";

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    createFloatingHearts();
  } else {
    alert("Wrong password! Try again, love 💖");
  }

  burstHearts(); // call burst regardless
}

function burstHearts() {
  const burstContainer = document.getElementById("heart-burst");
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${50 + Math.random() * 40 - 20}%`;
    heart.style.top = `${50 + Math.random() * 20 - 10}%`;
    burstContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}

function createFloatingHearts() {
  const container = document.querySelector(".floating-hearts-background");
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDelay = `${Math.random() * 20}s`;
    heart.style.background = ['#ffb6c1', '#ff99cc', '#ff85a2'][i % 3];
    container.appendChild(heart);
  }
}

const correctPassword = "Iloveyou";

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    showHeartBurst();
    setTimeout(() => {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 1000);
  } else {
    alert("Wrong password! Try again, my love.");
  }
}

function showHeartBurst() {
  const container = document.getElementById("heart-burst");
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = "50%";
    heart.style.fontSize = "20px";
    heart.style.animation = "burst 1s ease-out forwards";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
}


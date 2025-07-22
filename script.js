function checkPassword() {
  const correctPassword = "Iloveyou";
  const input = document.getElementById("password").value;

  if (input === correctPassword) {
    triggerHeartBurst();
    setTimeout(() => {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 1200);
  } else {
    alert("Wrong password, try again ❤️");
  }
}

function triggerHeartBurst() {
  const container = document.getElementById("heart-burst");
  container.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    heart.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
    heart.style.setProperty('--y', `${Math.random() * -200}px`);
    container.appendChild(heart);
  }
}


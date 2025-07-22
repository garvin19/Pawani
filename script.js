function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === "Iloveyou") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    alert("Oops! Try again 💔");
  }

  const burst = document.getElementById("heart-burst");
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 200 - 100}px`;
    heart.style.top = `${Math.random() * 200 - 100}px`;
    heart.style.background = `hsl(${Math.random() * 360}, 100%, 80%)`;
    burst.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
}

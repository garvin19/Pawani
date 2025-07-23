function checkPassword() {
  const input = document.getElementById("password").value;
  const loginScreen = document.getElementById("login-screen");
  const mainContent = document.getElementById("main-content");
  const burst = document.getElementById("heart-burst");
  const button = document.getElementById("login-button");

  // Only show heart burst if button is pressed
  burst.innerHTML = "";
  const rect = button.getBoundingClientRect();
  const burstX = rect.left + rect.width / 2;
  const burstY = rect.top + rect.height / 2;
  burst.style.position = "absolute";
  burst.style.left = `${button.offsetLeft + button.offsetWidth / 2 - 50}px`;
  burst.style.top = `${button.offsetTop + button.offsetHeight / 2 - 50}px`;
  burst.style.width = "100px";
  burst.style.height = "100px";
  burst.style.pointerEvents = "none";

  if (input === "Iloveyou") {
    // Heart burst effect
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = `${50 + Math.random() * 80 - 40}px`;
      heart.style.top = `${50 + Math.random() * 80 - 40}px`;
      heart.style.background = `hsl(${Math.random() * 360}, 100%, 80%)`;
      burst.appendChild(heart);
      setTimeout(() => heart.remove(), 1200);
    }
    // Smooth transition after burst
    setTimeout(() => {
      loginScreen.classList.add("fade-out");
      setTimeout(() => {
        loginScreen.style.display = "none";
        mainContent.style.display = "block";
        mainContent.classList.add("fade-in");
        // Start floating hearts
        startFloatingHearts();
      }, 600);
    }, 900);
  } else {
    alert("Oops! Try again 💔");
  }
}

// Floating hearts background for main content
function startFloatingHearts() {
  const container = document.querySelector(".floating-hearts");
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.className = "bg-heart";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = 8 + Math.random() * 8 + "s";
    heart.style.opacity = 0.15 + Math.random() * 0.15;
    heart.style.fontSize = 18 + Math.random() * 32 + "px";
    container.appendChild(heart);
  }
}

document.getElementById("password").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});


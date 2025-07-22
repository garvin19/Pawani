document.addEventListener("DOMContentLoaded", function () {
  const loginScreen = document.getElementById("login-screen");
  const enterButton = document.getElementById("login-button");
  const passwordInput = document.getElementById("password");

  enterButton.addEventListener("click", function () {
    const password = passwordInput.value.trim();

    // Heart burst effect
    createHeartBurst();

    // Password check
    if (password === "Iloveyou") {
      // Smooth transition
      loginScreen.style.opacity = "0";
      setTimeout(() => {
        loginScreen.style.display = "none";
        document.getElementById("main-content").style.display = "block";
        document.getElementById("main-content").style.opacity = "1";
      }, 1000);
    } else {
      passwordInput.style.border = "2px solid red";
    }
  });

  function createHeartBurst() {
    const numHearts = 20;
    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement("div");
      heart.innerText = "💖";
      heart.style.position = "fixed";
      heart.style.left = `${enterButton.offsetLeft + enterButton.offsetWidth / 2}px`;
      heart.style.top = `${enterButton.offsetTop + enterButton.offsetHeight / 2}px`;
      heart.style.fontSize = `${Math.random() * 20 + 12}px`;
      heart.style.opacity = "1";
      heart.style.transition = "transform 2s ease-out, opacity 2s";
      heart.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${-Math.random() * 200}px) scale(1.5)`;
      document.body.appendChild(heart);
      setTimeout(() => {
        heart.style.opacity = "0";
        heart.remove();
      }, 2000);
    }
  }
});

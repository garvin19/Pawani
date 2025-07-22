function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === "Iloveyou") {
    document.getElementById("passwordOverlay").style.display = "none";
    document.querySelector(".container").classList.remove("hidden");
    typeMessage();
  } else {
    alert("Wrong password! Try again 💔");
  }
}

function typeMessage() {
  const msg = "To my dearest Pawani — you’re the poem I always wanted to write 💌";
  let i = 0;
  const el = document.getElementById("typedMessage");
  function type() {
    if (i < msg.length) {
      el.innerHTML += msg.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
}

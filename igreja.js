const loginModal = document.getElementById("login-modal");
const loginBtn = document.getElementById("login-btn");
const closeBtn = document.getElementsByClassName("close")[0];
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

loginBtn.onclick = function () {
  loginModal.style.display = "flex";
};

closeBtn.onclick = function () {
  loginModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
};

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const validUsername = "usuario";
  const validPassword = "senha123";

  if (username === validUsername && password === validPassword) {
    alert("Login bem-sucedido!");
    loginModal.style.display = "none";
  } else {
    loginError.textContent = "Usuário ou senha incorretos.";
  }
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function handleScroll() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerHeight = window.innerHeight / 1.3;
    if (sectionTop < triggerHeight) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);


document.addEventListener("DOMContentLoaded", handleScroll);


document.getElementById("login-btn").addEventListener("click", function() {
  document.getElementById("loginModal").style.display = "flex";
});


document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("loginModal").style.display = "none";
});


window.addEventListener("click", function(event) {
  if (event.target === document.getElementById("loginModal")) {
      document.getElementById("loginModal").style.display = "none";
  }
});

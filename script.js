function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const menuIcon = document.querySelector('.menu-icon');
    
    navbarLinks.classList.toggle('active');
    menuIcon.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function () {
    const words = ["commercial retail.", "hospitality.", "residentials."];
    let index = 0;
    const changingText = document.getElementById("changing-text");

    function changeWord() {
        changingText.style.opacity = 0; // Fade out
        setTimeout(() => {
            index = (index + 1) % words.length;
            changingText.textContent = words[index];
            changingText.style.opacity = 1; // Fade in
        }, 700); // Extended fade-out delay
    }

    setInterval(changeWord, 2000); // Increased interval for smoother pacing
});

document.getElementById("tusk-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const status = document.getElementById("form-status");

  fetch("https://script.google.com/a/macros/tusksigns.ae/s/AKfycbwkj9AbEaK95uxD7iA6K3qZN8Ay4IZOiZajpFBLSj4tcygXoaAcKBsp0CleE4dkJEWGtw/exec", {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(data),
  })
    .then(() => {
      form.reset();
      status.innerText = "Message sent successfully!";
    })
    .catch(() => {
      status.innerText = "Oops! Something went wrong.";
    });
});

 


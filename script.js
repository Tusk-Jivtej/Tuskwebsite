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

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  fetch("https://script.google.com/macros/s/AKfycbykQ8VHpEbq-VcJN2yZXSPmaW--tZf2m7TDjwDk617-W_x2LtjJif5Cz_EFJbXnpGqISg/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  }),
})

  .then(response => response.json())
  .then(res => {
    if (res.result === 'success') {
      document.getElementById('form-status').textContent = 'Message sent successfully!';
      form.reset();
    } else {
      document.getElementById('form-status').textContent = 'Error sending message. Try again.';
    }
  })
  .catch(() => {
    document.getElementById('form-status').textContent = 'Network error. Try again.';
  });
});


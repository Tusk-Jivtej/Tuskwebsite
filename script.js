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

  fetch('https://script.google.com/macros/s/AKfycbw6bd_Pr9g-3gtM7QofUKitdgXStXAVRaly0cJIo0olP6sFz5bQs_6AoNZp-JR7Pf7V/exec', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
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


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

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const status = document.getElementById('form-status');
  status.textContent = "Sending...";

  // Extract form data
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const data = {
    name,
    email,
    message
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbykQ8VHpEbq-VcJN2yZXSPmaW--tZf2m7TDjwDk617-W_x2LtjJif5Cz_EFJbXnpGqISg/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.result === "success") {
      status.textContent = "Message sent successfully!";
      this.reset();
    } else {
      status.textContent = "Error sending message. Try again.";
      console.error(result.message);
    }
  } catch (error) {
    status.textContent = "Network error. Try again later.";
    console.error(error);
  }
});

 


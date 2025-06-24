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

  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
    
  try {
    const response = await fetch('https://script.google.com/a/macros/uspl.co.in/s/AKfycbyJ_38enmhcmQBDJlf882DG4E0BHg0LRxD6Asj7KSUQe1bK-JJzDeo-ucEWvRzMNqWEtA/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if(result.result === "success"){
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

 


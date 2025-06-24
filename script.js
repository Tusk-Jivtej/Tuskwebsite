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

const form = document.querySelector('.contact-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const response = await fetch('https://script.google.com/a/macros/uspl.co.in/s/AKfycbzGaVpYPDPh78olCKMQQAo84DAsTdequZK0I9upY7H_3aoWexDF6EFKQAeI864zdnk4Mw/exec', {
      method: 'POST',
      mode: 'no-cors',  // Important if you get CORS errors (but this disables response)
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    alert('Message sent successfully!');
    form.reset();
  } catch (error) {
    alert('Failed to send message.');
    console.error(error);
  }
});

 


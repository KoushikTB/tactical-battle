const toggleBtn = document.getElementById('modeToggle');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    // change icon
    if (body.classList.contains('')) {
      toggleBtn.textContent = '🌞';
    } else {
      toggleBtn.textContent = '🌙';
    }
  });

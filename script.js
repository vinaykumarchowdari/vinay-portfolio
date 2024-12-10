document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const darkModeIcon = document.getElementById("darkModeIcon");
    const body = document.body;
  
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      darkModeIcon.classList.toggle("fa-sun");
      darkModeIcon.classList.toggle("fa-moon");
    });
  });
  
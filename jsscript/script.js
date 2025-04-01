let toggleBtn = document.getElementById('toggleModeBtn');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (icon.classList.contains('fa-moon-o')) {
    icon.classList.replace('fa-moon-o', 'fa-sun-o');
  } else {
    icon.classList.replace('fa-sun-o', 'fa-moon-o');
  }
});

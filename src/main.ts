import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

const toggleBtn = document.getElementById('toggleModeBtn') as HTMLButtonElement | null;

if (toggleBtn) {
  const icon = toggleBtn.querySelector('i') as HTMLElement | null;

  toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (icon) {
      if (icon.classList.contains('fa-moon-o')) {
        icon.classList.replace('fa-moon-o', 'fa-sun-o');
      } else {
        icon.classList.replace('fa-sun-o', 'fa-moon-o');
      }
    }
  });
}

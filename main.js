import './style.css';
import './reset.css';

async function submitForm() {
  const form = document.getElementById('login-form');
  const formData = new FormData(form);

  try {
    const response = await fetch('/path/to/your/php/script', {
      method: 'POST',
      body: formData
    });

    const data = await response.text();
    const messageContainer = document.getElementById('message-container');
    const messageClass = data === 'Identifiants incorrects' ? 'text-red-700' : 'text-green-600';
    messageContainer.innerHTML = `<p class="${messageClass} pt-6">${data}</p>`;
  } catch (error) {
    console.error('Error:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });
  }
});

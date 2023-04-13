document.addEventListener('DOMContentLoaded', () => {
  const toggleTheme = document.getElementById('toggle-theme');
  const resetButton = document.getElementById('reset-button');
  const form = document.querySelector('form');
  const banner = document.querySelector('.banner');

  toggleTheme.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
  });

  resetButton.addEventListener('click', () => {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach((textarea) => {
      textarea.value = '';
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let promptText = '';
    const inputs = document.querySelectorAll('textarea');

    inputs.forEach((input) => {
      const label = document.querySelector(`label[for='${input.id}']`).textContent;
      const value = input.value;

      if (value.trim() !== '') {
        promptText += `${label}: ${value}\n`;
      }
    });

    // Copier le texte dans le presse-papier
    navigator.clipboard.writeText(promptText).then(() => {
      banner.hidden = false;
      setTimeout(() => {
        banner.hidden = true;
      }, 3000);
    }, (err) => {
      console.error('Erreur lors de la copie dans le presse-papier:', err);
    });
  });
});
function resetForm() {
  document.querySelector("form").reset();
}

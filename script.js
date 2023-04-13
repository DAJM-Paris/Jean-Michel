document.addEventListener('DOMContentLoaded', () => {
  const toggleTheme = document.getElementById('toggle-theme');
  const resetButton = document.getElementById('reset-button');
  const form = document.querySelector('form');
  const banner = document.querySelector('.banner');

  toggleTheme.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
  });

  resetButton.addEventListener('click', () => {
    resetForm();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let promptText = '';
    const textareas = document.querySelectorAll('textarea');
    const selects = document.querySelectorAll('select');

    textareas.forEach((textarea) => {
      const label = document.querySelector(`label[for='${textarea.id}']`).textContent;
      const value = textarea.value;

      if (value.trim() !== '') {
        promptText += `${label}: ${value}\n`;
      }
    });

    selects.forEach((select) => {
      const label = document.querySelector(`label[for='${select.id}']`).textContent;
      const value = select.value;

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
